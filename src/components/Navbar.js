import React from 'react'
import { Box, makeStyles, Container, AppBar, Toolbar, Typography, IconButton, Menu, Tooltip, Avatar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles({
    navBar: {
        backgroundColor: "rgb(235,87,87)",
    },
    topNavBar: {
        background: 'rgb(34,34,34)',
        display: 'flex',
    },
    button: {
        '&:hover': {
            background: "rgb(34,34,34)",
        },
        cart: {
            background: "rgb(34,34,34)"
        }
    },
    topHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    }

})

function Navbar() {
    const classes = useStyles();
    let navigate = useNavigate();
    return (

        <AppBar className={classes.navBar} position="sticky" >
            <Toolbar style={{
                display: 'flex', justifyContent: 'center', background: 'rgb(34,34,34)'
            }}>
                <Box>
                    <Typography style={{ background: '#EB5757', borderRadius: '1em', paddingInline: '1rem' }} variant="subtitle1">
                        Announcement
                    </Typography>
                </Box>
                <Box>
                    <Typography style={{ marginLeft: '1em', fontWeight: '400' }} variant="h6">
                        How we're responsing to COVID-19
                    </Typography>
                </Box>
            </Toolbar>
            <Toolbar style={{
                display: 'flex', justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography variant="h6" style={{ marginLeft: '8em' }}>
                        LOGO
                    </Typography>
                </Box>
                <Box>
                    <Box style={{ display: 'flex', gap: '3em', marginRight: '5em' }}>

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