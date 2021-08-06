import { StarRate } from '@material-ui/icons';
import axios from 'axios';
import React, { useReducer } from 'react';
import { calcSubPrice, calcTotalPrice } from '../helpers/CalcPrice';
import { AUTH_API, JSON_API } from '../helpers/Constants';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    productCountCart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).products.length : 0,
    cartData: null,
    productDetail: null,
    paginationPages: 1,
}

const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload.data, paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4) }
        case "ADD_AND_DELETE_PRODUCT_IN_CART":
            return { ...state, productCountCart: action.payload }
        case "GET_CART":
            return { ...state, cartData: action.payload }
        case "DET_PRODUCT_DETAIL":
            return { ...state, productDetail: action.payload }
        case "MAKE_ORDER":
            return { ...state, productCountCart: action.payload }
        case "FILTER_PRODUCT":
            return { ...state, products: action.payload }

        default:
            return state
    }
}

const ClientContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduser, INIT_STATE)

    const getProducts = async (history) => {
        const search = new URLSearchParams(window.location.search)
        search.set('_limit', 4)
        history ? (history.push(`${history.location.pathname}?${search.toString()}`)) : (console.log(null))
        const res = await axios(`${JSON_API}?_limit=4&${window.location.search}`)

        dispatch({
            type: "GET_PRODUCTS",
            payload: res
        })
    }
    const registerUser = async (newUser, history) => {
        try {
            const res = await axios.post(`${AUTH_API}/registration`, newUser)
            console.log(res);
            history.push('/signin')
        }
        catch {
            alert("idi kuda shel")
        }
    }
    const loginUser = async (user, history) => {
        try {
            const res = await axios.post(`${AUTH_API}/login`, user)
            console.log(res);
            history.push('/')
        }
        catch {
            alert("vvedite vernye dannye")
        }
    }

    function addAndDeleteProductInCard(product) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        console.log(newProduct)
        newProduct.subPrice = calcSubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length > 0) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        }
        else {
            cart.products.push(newProduct)
        }
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "ADD_AND_DELETE_PRODUCT_IN_CART",
            payload: cart.products.length
        })
    }

    function checkProductInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.products.filter(item => item.product.id === id)
        return newCart.length > 0 ? true : false
    }

    function getCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                products: []
            }
        }

        dispatch({
            type: "GET_CART",
            payload: cart.products
        })
    }

    function changeCountProduct(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"))
        cart.products = cart.products.map(item => {
            if (item.product.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    async function getProductDetail(id) {
        const { data } = await axios(`${JSON_API}/${id}`)
        dispatch({
            type: "DET_PRODUCT_DETAIL",
            payload: data
        })
    }

    function makeOrder() {
        localStorage.setItem("cart", null)
        dispatch({
            type: "MAKE_ORDER",
            payload: 0
        })
    }

    async function filterProducts(price) {
        const { data } = await axios(JSON_API)
        console.log(data);
        const filteredArr = data.filter(item => +item.price <= +price)
        console.log(filteredArr);
        dispatch({
            type: "FILTER_PRODUCT",
            payload: filteredArr
        })
    }

    return (
        <clientContext.Provider value={{
            products: state.products,
            productCountCart: state.productCountCart,
            cartData: state.cartData,
            productDetail: state.productDetail,
            paginationPages: state.paginationPages,
            getProducts,
            registerUser,
            loginUser,
            addAndDeleteProductInCard,
            checkProductInCart,
            getCart,
            changeCountProduct,
            makeOrder,
            getProductDetail,
            filterProducts

        }}>
            {children}

        </clientContext.Provider>
    );
};

export default ClientContextProvider;