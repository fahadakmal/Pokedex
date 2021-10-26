import { TOOGLE_FAVOURITE } from "./actions";

const initialData = {
  favourites: [],
};

const pokemonReducer = (state = initialData, action) => {
  switch (action.type) {
    case TOOGLE_FAVOURITE:
      let pokemon = action.payload;
      let pokeomFromFavorite = state.favourites.find(
        (favPokeom) => pokemon.id === favPokeom.id
      );
      return {
        ...state,
        favourites: pokeomFromFavorite
          ? [
              ...state.favourites.filter(
                (pokemon) => pokemon.id !== pokeomFromFavorite.id
              ),
            ]
          : [...state.favourites, action.payload],
      };

    default:
      return state;
  }
};

export default pokemonReducer;
