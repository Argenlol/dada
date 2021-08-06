import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AdminContext } from '../../context/AdminContext';

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "spacebetween",
        marginBottom: "20px"
    },
    divs: {
        display: "flex",
        flexDirection: "column",
        width: "49%"
    },
    buttonBlock: {
        marginBottom: "50px",
        width: "100%"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "lightBlue",
        color: "white"
    }
})

const Add = () => {

    const classes = useStyles()

    const { createProduct } = useContext(AdminContext)

    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
        author: "",
        discount: "",
        phone: "",
        category: "",
        images: "",
        countInStock: "",
        storeAddress: ""
    })

    function handleInput(e) {
        let obj = {};
        if (e.target.name === "price") {
            obj = {
                ...newProduct,
                [e.target.name]: +e.target.value
            }
        } else {
            obj = {
                ...newProduct,
                [e.target.name]: e.target.value
            }
        }
        setNewProduct(obj)
    }


    function handleClick() {
        createProduct(newProduct)
        setNewProduct(
            {
                title: "",
                description: "",
                price: "",
                author: "",
                discount: "",
                phone: "",
                category: "",
                images: "",
                countInStock: "",
                storeAddress: ""
            }
        )
    }

    return (
        <>
            <div className={classes.main}>
                <div className={classes.divs}>
                    <TextField value={newProduct.title} onChange={handleInput} name="title" id="standart-basic" label="NAME" />
                    <TextField value={newProduct.description} onChange={handleInput} name="description" id="standart-basic" label="SURNAME" />
                    <TextField value={newProduct.price} onChange={handleInput} name="price" id="standart-basic" label="PRICE" />
                    <TextField value={newProduct.author} onChange={handleInput} name="author" id="standart-basic" label="PERSON" />


                </div>
                <div className={classes.divs}>
                    <TextField value={newProduct.phone} onChange={handleInput} name="phone" id="standart-basic" label="PHONE NUMER" />
                    <TextField value={newProduct.category} onChange={handleInput} name="category" id="standart-basic" label="COUNTRY" />
                    <TextField value={newProduct.images} onChange={handleInput} name="images" id="standart-basic" label="FOTO" />
                    <TextField value={newProduct.countInStock} onChange={handleInput} name="countInStock" id="standart-basic" label="UNIT" />


                </div>

            </div>
            <div className={classes.buttonBlock}>
                <button onClick={handleClick} className={classes.button}>ADD</button>
            </div>
        </>
    );
};

export default Add;