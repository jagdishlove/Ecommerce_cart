import React, { useEffect, useState } from 'react'
import { Backdrop, Box, Button, makeStyles, Modal, Typography } from '@material-ui/core'
import CartIncreaser from './CartIncreaser';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
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

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function DetailsModal({ open, handleClose, getModal }) {
    const classes = useStyles()
    const [cartCount, setCartCount] = useState()

    const addToCart = (e, id, count, image, title) => {
        e.preventDefault();
        const new_data = { 'id': id, 'count': count, 'image': image, 'title': title };
        if (localStorage.getItem('AddedToCart') === null) {
            localStorage.setItem('AddedToCart', '[]')
        }
        const old_data = JSON.parse(localStorage.getItem('AddedToCart'))
        old_data.push(new_data);
        localStorage.setItem('AddedToCart', JSON.stringify(old_data));

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Box sx={style}>
                <CloseIcon onClick={handleClose} />
                <Typography id="modal-modal-title" variant="h3" component="h2">
                    Product Details
                </Typography>
                <Box>
                    <img style={{ height: '200px', width: '160px' }} src={getModal.image} alt="productImage" />
                </Box>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    {getModal.title}
                </Typography>
                <CartIncreaser setCartCount={setCartCount} />
                <Button
                    onClick={(e) => {
                        addToCart(e, getModal.id, cartCount, getModal.image, getModal.title);
                        alert("product added to cart");
                        handleClose(false);
                        // setHideAddToCart(true);
                    }}
                    className={classes.button}
                    variant="contained"
                    size="small">
                    <Typography>ADD TO CART</Typography>
                </Button>
            </Box>
        </Modal >
    )
}

export default DetailsModal