import React from "react";
import { Redirect } from "react-router-dom";
import './pokemonInfo.css';

class Pokemon extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const pokemon = this.props.pokemons.find(pokemon => pokemon.id === parseInt(id, 10));

    if (!pokemon) {
      console.log('ok');
      return <Redirect to="/404" />;
    }

    const {name, type, averageWeight, image, summary, foundAt} = pokemon;

    return (
      <div className="page-info">
        <h1>{name} Details</h1>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <h1>Summary</h1>
          <p>{summary}</p>
        <h1>Game Locations of { name }</h1>
        {foundAt.map((found, index) => {
          return (<div key={ `location ${ index }` }>
            <img src={ found.map } alt={`map ${ name }`} />
            <p>{ found.location }</p>
          </div>)
        })}
      </div>
    );
  }
}

export default Pokemon;