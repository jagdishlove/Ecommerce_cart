import React from 'react'
import { Box, makeStyles, Container, AppBar, Toolbar, Typography, IconButton, Menu, Tooltip, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    navBar: {
        backgroundColor: "hotpink",
    }
})

function Navbar() {
    const classes = useStyles();
    let navigate = useNavigate();
    return (
        <AppBar className={classes.navBar} position="sticky">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h6" className={classes.title}>
                        LOGO
                    </Typography>
                </Box>
                <Box>
                    <IconButton color="inherit" onClick={() => navigate("/")}>
                        Home
                    </IconButton>
                    <IconButton color="inherit">
                        About
                    </IconButton>
                    <IconButton color="inherit" >
                        Contact
                    </IconButton>
                    <IconButton color="inherit" >
                        Shop
                    </IconButton>
                    <IconButton color="inherit" onClick={() => navigate("/cart")} >
                        Cart
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar