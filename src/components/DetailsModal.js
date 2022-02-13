import React, { useEffect, useState } from 'react'
import { Backdrop, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles, Modal, Typography } from '@material-ui/core'
import CartIncreaser from './CartIncreaser';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    button: {
        background: 'green',
        color: 'white',
        wordWrap: 'normal',
        width: '10em',
        padding: '1em',
        "&:hover": {
            background: 'lightgreen',
            color:'black'
        }
    },
    dialogClose: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle className={classes.dialogClose}>
                <IconButton style={{
                    marginLeft: '22em',
                    marginTop: '-1.3em'
                }}
                    onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText >
                    <Typography style={{ textAlign: "center" }} id="modal-modal-title" variant="h3" component="h2">
                        Product Details
                    </Typography>
                </DialogContentText>

                <Box style={{ textAlign: 'center' }}>
                    <img style={{ height: '200px', width: '160px' }} src={getModal.image} alt="productImage" />
                </Box>
                <Typography style={{ textAlign: "center", fontWeight: 'bold' }} variant="h5" sx={{ mt: 2 }}>
                    {getModal.title}
                </Typography>
                <Typography style={{ textAlign: "center", fontWeight: 'bold' }} variant="h5" sx={{ mt: 2 }}>

                </Typography>
                <Typography variant="subtitle1" >
                    Description : {getModal.description}
                </Typography>
                <CartIncreaser setCartCount={setCartCount} />

            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
                <Button
                    onClick={(e) => {
                        addToCart(e, getModal.id, cartCount, getModal.image, getModal.title);
                        alert("product added to cart");
                        handleClose(false);
                    }}
                    className={classes.button}
                    variant="outlined"
                    size="small">
                    <Typography>ADD TO CART</Typography>
                </Button>

            </DialogActions>
        </Dialog >

    )
}

export default DetailsModal