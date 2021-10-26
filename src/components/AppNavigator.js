import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
     AppBar:{
         backgroundColor:'black'
     },
     Link:{
         textDecoration:"none"
     },
     title:{
         cursor:"pointer",
         color:"white"
     }
}));

export default function AppNavigator() {
    const classes=useStyles();
    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar>
                <Link to="/" className={classes.Link}>
                    <Typography className={classes.title} variant="h6">
                        Pokedex
                    </Typography>
                </Link>
                <Link to="/Favourites" className={classes.Link}>
                    <Typography style={{marginLeft:10}} className={classes.title} variant="h6">
                        Favourites
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
