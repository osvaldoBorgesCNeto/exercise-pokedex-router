import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './Routes/About';
import PokemonInfo from './Routes/PokemonInfo';
import FavoritePokemon from './Routes/FavoritePokemon';
import NotFound from './Routes/NotFound';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/favorites">Favorite Pokémons</Link>
          <Switch>
            <Route 
              exact path="/" 
              render={ () => <Pokedex pokemons={pokemons} /> } 
            />
            <Route path="/about" component={ About }/>
            <Route 
              path="/pokemons/:id"
              render={ (props) => <PokemonInfo {...props} pokemons={pokemons} />}
            />
            <Route path="/favorites" component={ FavoritePokemon }/>
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;