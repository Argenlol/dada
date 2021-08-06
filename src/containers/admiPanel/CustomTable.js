import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import Edit from './Edit';

const CustomTable = () => {

    const { getProducts, products, deleteProduct, getProductToEdit } = useContext(AdminContext)
    useEffect(() => {
        getProducts()
    }, [])

    const [changeId, setChangeId] = useState(null)

    const handleEditChange = (id) => {
        getProductToEdit(id)
        setChangeId(id)
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>-----</TableCell>
                        <TableCell>-----</TableCell>
                        <TableCell align="right">FOTO</TableCell>
                        <TableCell>NAME</TableCell>
                        <TableCell align="right">SURNAME</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                        <TableCell align="right">PERSON</TableCell>
                        <TableCell align="right">PHONE NUMER</TableCell>
                        <TableCell align="right">COUNTRY</TableCell>
                        <TableCell align="right">UNIT</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products ? (

                            <>
                                {
                                    products.length ? (
                                        products.map(product => (
                                            <React.Fragment key={product.id} >
                                                {
                                                    changeId === product.id ? (
                                                        <Edit setChangeId={setChangeId} />
                                                    ) : (
                                                        <TableRow>
                                                            <TableCell align="right"><button onClick={() => deleteProduct(product.id)}>DELETE</button></TableCell>
                                                            <TableCell align="right"><button onClick={() => handleEditChange(product.id)}>EDIT</button></TableCell>
                                                            <TableCell align="right"><img width="350" src={product.images} /></TableCell>
                                                            <TableCell component="th" scope="row">{product.title}</TableCell>
                                                            <TableCell align="right">{product.description}</TableCell>
                                                            <TableCell align="right">{product.price}</TableCell>
                                                            <TableCell align="right">{product.author}</TableCell>
                                                            <TableCell align="right">{product.phone}</TableCell>
                                                            <TableCell align="right">{product.category}</TableCell>
                                                            <TableCell align="right">{product.countInStock}</TableCell>
                                                        </TableRow>
                                                    )
                                                }

                                            </React.Fragment>
                                        ))
                                    ) : (<h2>will enter data</h2>)
                                }
                            </>


                        ) : (
                            <h1>loading...</h1>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;