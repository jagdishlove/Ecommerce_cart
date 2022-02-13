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
    // const addToCart = data.filter(item => localData.includes(item.id));
    // console.log(addToCart)


    const removeCartItem = (id, e) => {
        e.preventDefault();
        localData.splice(id, 1);
        localStorage.setItem('questions', JSON.stringify(localData));

    }


    return (
        <div>

            {localData.length !== 0 ?
                localData?.map(item => {
                    console.log(item)
                    return (
                        <Box p={2} sx={{ justifyContent: 'flex-start', alignItems: 'center' }} display="flex">
                            <img style={{ width: '10%' }} src={item.image} alt="product" />
                            <Typography>{item.title}</Typography>
                            <Typography>{item.price}</Typography>
                            {/* <CartIncreaser /> */}
                            <Button onClick={(e) => removeCartItem(localData.id, e)}>Remove</Button>
                        </Box>
                    )
                }) : <Box sx={{ height: '40em', }}><Typography variant="h5" style={{ opacity: '.5', marginLeft: '45%', marginTop: "10%" }}>No Product in Cart</Typography></Box>}
        </div>
    )
}

export default Cart