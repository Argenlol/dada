import React, { useContext, useEffect, useState } from 'react';
import { clientContext } from '../../context/ClientContext';
import MediaCard from './MediaCard';

const List = () => {
    const { getProducts, products } = useContext(clientContext)

    useEffect(() => {
        // getProducts()
    }, [])

    return (
        <div className="list">
            {
                products ? (
                    products.length ? (
                        products.map(product => (
                            <MediaCard key={product.id} product={product} />

                        ))
                    ) : (
                        <h1>ничего нет</h1>
                    )
                ) : (
                    <h1>LOADING...</h1>
                )
            }

        </div>
    );
};

export default List;