import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, makeStyles, } from "@material-ui/core";
import axios from "axios";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";
import PokemonCard from "../components/PokemonCard";

const useStyles=makeStyles((theme)=>({
    pokedenContainer:{
        textAlign:'center',
        padding:"80px 10px 0px 10px",
        backgroundColor:"rgb(68,68,68)"
    }

}))


export default function Pokedex() {
    const classes=useStyles();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=800`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonData(newPokemonData);
      }
    });
  }, []);

  return (
    <div>
      <Box>
        {pokemonData ? (
          <Grid container className={classes.pokedenContainer} spacing={2}>
            {pokemonData.map((pokemon) => {
                return <PokemonCard  pokemon={pokemon}  image={pokemon.url} key={pokemon.id}/>
            })}
          </Grid>
        ) : (
          <CircularProgress style={{ marginTop: 100 }} />
        )}
      </Box>
    </div>
  );
}
