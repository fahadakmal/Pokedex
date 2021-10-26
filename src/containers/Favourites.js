import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CircularProgress,
    Box,
    Typography,
    Grid,
    Button,
  } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import PokemonCard from '../components/PokemonCard';


  const styles=(theme)=>({
    pokedexContainer: {
        height: "100vh",
        backgroundColor: "rgb(68,68,68)",
        paddingTop:80,
        textAlign:"center"
      },

  })

export class Favourites extends Component {
    render() {
        const {classes}=this.props;
        return (
           <Box>
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {
                        this.props.favourites.map((favPokemon)=>{
                            console.log('image',favPokemon);
                            return (
                                 <PokemonCard  pokemon={favPokemon}   key={favPokemon.id} image={favPokemon.sprites.front_default}/>
                                )
                        })
                    }
                </Grid>
           </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    favourites:state.favourites
    
})

const mapDispatchToProps = (dispatch)=>({
    
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Favourites));
