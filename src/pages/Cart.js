import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

function Cart() {
    const [data, setData] = useState([])
    const [localData, setLocalData] = useState();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/`).then(res => {
            setData(res.data)
        })

        const newData = localStorage.getItem("AddedToCart");

        setLocalData(_.uniq(newData));

    }, [])

    console.log("this is local data", localData)
    return (
        <div>
            {
                data.filter(item=> item.id ===localData[0]).map(item => {
                    return (
                        <div>
                            <img src={item.image} alt="product" />
                            <div>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Cart