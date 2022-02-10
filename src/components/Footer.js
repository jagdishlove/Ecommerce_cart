import React from 'react'
import { AppBar, Box, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  navBar: {
    backgroundColor: "lightblue",

  }
})
function Footer() {

  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar>
        <Box>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
        </Box>

      </Toolbar>
      
    </AppBar >
  )
}

export default Footer