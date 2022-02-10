import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Box, Typography } from '@material-ui/core';

function Cart() {
    const [data, setData] = useState([])
    const [localData, setLocalData] = useState();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then(res => {
            setData(res.data)
        })

        setLocalData(localStorage.getItem("AddedToCart"));

        // setLocalData(_.uniq(newData));

    }, [])


    const addToCart = data.filter(item => localData.includes(item.id));
    console.log("this is cart", addToCart)


    return (
        <div>
            {
                data.filter(item => localData.includes(item.id)).map(item => {
                    return (
                        <Box p={2} sx={{justifyContent:'flex-start',alignItems:'center'}} display="flex">
                            <img style={{ width: '10%' }} src={item.image} alt="product" />
                            <Typography>{item.title}</Typography>
                            <Typography>{item.price}</Typography>

                        </Box>
                    )
                })}
        </div>
    )
}

export default Cart