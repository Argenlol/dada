import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/CalcPrice';

const Cart = () => {
    const { getCart, cartData, makeOrder, changeCountProduct } = useContext(clientContext)

    useEffect(() => {
        getCart()
    }, [])
    console.log(cartData);
    const history = useHistory()
    function handleClick() {
        makeOrder()
        history.push("/")
    }

    return (
        <>
            {cartData ? (
                cartData.length ? (
                    <div className="cart">
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>IMAGE</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>UNIT</th>
                                        <th>SUM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartData.map(item => (

                                            <tr key={item.product.id} >
                                                <td><img width="50" src={item.product.images} /></td>
                                                <td>{item.product.title}</td>
                                                <td>{item.product.price}</td>
                                                <td><input min="1" onChange={(e) => changeCountProduct(e.target.value)} type="number" value={item.count} /></td>
                                                <td>{calcSubPrice(item)}</td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                            <h4 style={{ display: "flex", alignContent: 'center' }}>TOTAL:{calcTotalPrice(cartData)}</h4>
                            <button onClick={handleClick}>Oplatit</button>
                        </div>
                    </div>
                ) : (
                    <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '300px' }}>NOTHING SELECTED</h1>
                )
            ) : (
                <h1>LOADING...</h1>
            )
            }
        </>
    );
};

export default Cart;