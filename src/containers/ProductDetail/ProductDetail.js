import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';

const ProductDetail = () => {
    console.log("Otrabotal")
    const { getProductDetail, productDetail } = useContext(clientContext)
    const { id } = useParams()
    console.log(productDetail, "products")
    useEffect(() => {
        getProductDetail(id)
        console.log(productDetail);
    }, [])
    return (
        <>
            {
                productDetail ? (
                    <div className="container">
                        <div className="product-detail">
                            <div className="detail-left"><img src={productDetail.images} /></div>
                            <div className="detail-right">
                                <h3>{productDetail.title}</h3>
                                <ul>
                                    <li>
                                        <div>PRICE</div>
                                        <div>{productDetail.price}$</div>
                                    </li>
                                    <li>
                                        <div>PERSON</div>
                                        <div>{productDetail.author}</div>
                                    </li>
                                    <li>
                                        <div>PHONE NUMBER</div>
                                        <div>{productDetail.phone}</div>
                                    </li>
                                    <li>
                                        <div>COUNTRY</div>
                                        <div>{productDetail.category}</div>
                                    </li>
                                    <li>
                                        <div>UNIT</div>
                                        <div>{productDetail.countInStock}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p>{productDetail.description}</p>
                        </div>
                    </div>

                ) : (
                    <h1> LOADING...</h1>
                )
            }
        </>
    );
};

export default ProductDetail;