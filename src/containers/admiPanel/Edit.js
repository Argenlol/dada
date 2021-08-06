import React, { useContext, useEffect, useState } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { AdminContext } from '../../context/AdminContext';


const Edit = ({ setChangeId }) => {

    const { productToEdit, saveEditProduct } = useContext(AdminContext)
    const [editProduct, setEditProduct] = useState(productToEdit)

    useEffect(() => {
        setEditProduct(productToEdit)
    }, [productToEdit])
    const handleInput = (e) => {
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        }
        setEditProduct(obj)
    }

    const handleClick = () => {
        saveEditProduct(editProduct)
        setChangeId(null)
    }

    return (
        <>
            {
                editProduct ? (
                    <TableRow>
                        <TableCell align="right"><button disabled>DELETE</button></TableCell>
                        <TableCell align="right"><button onClick={handleClick} >SAVE</button></TableCell>
                        <TableCell component="th" scope="row"><input onChange={handleInput} value={editProduct.title} type="text" name="title" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.images} type="text" name="images" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.description} type="text" name="description" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.price} type="number" name="price" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.author} type="text" name="author" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.phone} type="number" name="phone" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.category} type="text" name="categoty" /></TableCell>
                        <TableCell align="right"><input onChange={handleInput} value={editProduct.countInStock} type="number" name="countInStock" /></TableCell>
                    </TableRow>
                ) : (
                    <h1>aaa</h1>
                )
            }

        </>
    );
};

export default Edit;