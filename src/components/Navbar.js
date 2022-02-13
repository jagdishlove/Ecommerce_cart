import React from 'react'
import { Box, makeStyles, Container, AppBar, Toolbar, Typography, IconButton, Menu, Tooltip, Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles({
    navBar: {
        backgroundColor: "rgb(235,87,87)",
    },
    button: {
        '&:hover': {
            background: "rgb(34,34,34)",
        },
        cart: {
            background: "rgb(34,34,34)"
        }
    }
})

function Navbar() {
    const classes = useStyles();
    let navigate = useNavigate();
    return (
        <AppBar className={classes.navBar} position="sticky">
            <Toolbar style={{
                display: 'flex', justifyContent: 'space-around'
            }}>
                <Box>
                    <Typography variant="h6" className={classes.title}>
                        LOGO
                    </Typography>
                </Box>
                <Box>
                    <Box>

                        <Button className={classes.button} color="inherit" onClick={() => navigate("/")}>
                            Home
                        </Button>
                        <Button className={classes.button} color="inherit">
                            About
                        </Button>
                        <Button className={classes.button} color="inherit" >
                            Contact
                        </Button>
                        <Button className={classes.button} color="inherit" >
                            Shop
                        </Button>
                        <Button style={{ background: "rgb(34,34,34)" }} color="inherit" onClick={() => navigate("/cart")} >
                            <ShoppingCartIcon />
                        </Button>
                    </Box>

                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar