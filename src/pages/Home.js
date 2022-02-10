import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import CartIncreaser from '../components/CartIncreaser'

const useStyles = makeStyles({
    productCard: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        flexDirection: 'column',
        marginBottom: '10%',
        padding: '8%',
        width: '10%',
        height: '10em',
        borderRadius: '1em',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',


    },
    images: {
        height: "100%",
        objectFit: "cover",
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    title: {
        width: '20em',
        textAlign: 'center',
    },
    button: {
        background: 'lightblue',
        color: 'white',
        wordWrap: 'normal',
        width: '10em',
        padding: '1em',
        "&:hover": {
            background: 'blue',
        }
    }
})
function Home() {
    const [data, setData] = useState([])
    const [localData, setLocalData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            setData(res.data)

        })
    }, [])

    const addToCart = (id) => {


        const new_data = id;
        if (localStorage.getItem('AddedToCart') === null) {
            localStorage.setItem('AddedToCart', '[]')
        }

        const old_data = JSON.parse(localStorage.getItem('AddedToCart'))
        old_data.push(new_data);



        localStorage.setItem('AddedToCart', JSON.stringify(old_data));
    }


    return (
        <div style={{ background: '#f5f5f5' }}>
            <Typography style={{ fontWeight: 'bold', marginLeft: '45%', marginBottom: '1em' }} variant="h3">Products</Typography>
            <Box className={classes.container} >
                {data.map(product => {
                    return (
                        <Card className={classes.productCard}>
                            <img className={classes.images} src={product.image} alt="product" />
                            <CardContent>
                                <Typography className={classes.title}>
                                    {product.title}
                                </Typography>

                                <Typography style={{ fontWeight: 'bold' }} className={classes.title}>
                                    ₹{product.price}
                                </Typography>
                                <CartIncreaser />
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => {
                                    setLocalData(product.id);
                                    addToCart(product.id);
                                }} variant="contained" className={classes.button} size="small"><Typography>ADD TO CART</Typography></Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Box>
        </div>


    )
}

export default Home