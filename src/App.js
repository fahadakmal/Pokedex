import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./components/AppNavigator";
import Favourites from "./containers/Favourites";
import Pokedex from "./containers/Pokedex";
import PokemonDetail from "./containers/PokemonDetail";
import { persistor, store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetail} />
          <Route exact path="/Favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
