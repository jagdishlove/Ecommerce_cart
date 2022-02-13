import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _, { set } from 'lodash';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import CartIncreaser from '../components/CartIncreaser';

function Cart() {
    const [data, setData] = useState([])
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then(res => {
            setData(res.data)
        })
        const uniqueData = JSON.parse(localStorage.getItem("AddedToCart"))
        setLocalData(_.uniqBy(uniqueData, 'id'))
    }, [])



    const removeCartItem = (id) => {
        const deleted = localData.filter((item, index) => {
            return item.id !== id
        })
        setLocalData(deleted)
        localStorage.setItem("AddedToCart", JSON.stringify(deleted));


    }


    return (
        <div>

            {localData.length !== 0 ?
                localData?.map(item => {
                    console.log(item)
                    return (
                        <Box p={2} sx={{ width: '100%', justifyContent: 'space-around', alignItems: 'center' }} display="flex">
                            <img style={{ width: '10%' }} src={item.image} alt="product" />
                            <Typography>{item.title}</Typography>
                            <Typography>{item.price}</Typography>
                            <Typography>Quantity :{item.count}</Typography>
                            <Button variant="outlined" style={{ border: '1px solid red', background: '#ffcccb' }} onClick={() => removeCartItem(item.id)}>Remove</Button>
                        </Box>
                    )
                }) : <Box sx={{ height: '40em', }}><Typography variant="h5" style={{ opacity: '.5', marginLeft: '45%', marginTop: "10%" }}>No Product in Cart</Typography></Box>}
        </div>
    )
}

export default Cart