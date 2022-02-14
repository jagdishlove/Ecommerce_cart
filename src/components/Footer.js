import React from 'react'
import { AppBar, Box, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: "rgb(34,34,34)",
    height: '12em',
  }
})
function Footer() {

  const classes = useStyles();
  return (
    <AppBar className={classes.navBar} position="static">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '3%' }}>
        <Box>
          <Typography variant="h4" className={classes.title}>
            LOGO
          </Typography>
        </Box>
        <Box>
          <Typography style={{fontWeight:'300',fontSize:'.6em',marginTop:'10em'}} variant="subtitle1" className={classes.title}>
            Made in @webflow
          </Typography>
        </Box>
        <Box display='flex' style={{gap:'1em'}}>
          <Typography variant="h5" className={classes.title}>
            <InstagramIcon />
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <FacebookIcon />
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <TwitterIcon />
          </Typography>
        </Box>

      </Toolbar>

    </AppBar >
  )
}

export default Footer