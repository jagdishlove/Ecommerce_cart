import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, makeStyles, Typography } from '@material-ui/core'
import CartIncreaser from '../components/CartIncreaser'
import DetailsModal from '../components/DetailsModal'

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
        background: 'pink',
        color: 'white',
        wordWrap: 'normal',
        width: '10em',
        padding: '1em',
        "&:hover": {
            background: 'hotpink',
        }
    }
})
function Home() {
    const [data, setData] = useState([])
    const [localData, setLocalData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [getModal, setGetModal] = React.useState()
    const classes = useStyles();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            setData(res.data)

        })
    }, [])




    return (
        <div style={{ background: '#f5f5f5' }}>
            <Typography style={{ fontWeight: 'bold', marginLeft: '45%', marginBottom: '1em' }} variant="h3">Products</Typography>
            <Box className={classes.container} >
                {data.length === 0 && <Box mt={10} sx={{ height: '30em' }}><CircularProgress color="inherit" /></Box>}
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
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => {
                                    setOpen(true);
                                    setGetModal(product)
                                }} variant="contained" className={classes.button} size="small"><Typography>Details</Typography></Button>
                            </CardActions>
                        </Card>
                    )
                })}

                {open && <DetailsModal open={open} handleClose={handleClose} getModal={getModal} />}
            </Box>
        </div>


    )
}

export default Home