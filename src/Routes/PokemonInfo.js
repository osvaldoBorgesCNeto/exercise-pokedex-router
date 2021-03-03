import React from "react";
import NotFound from './NotFound';
import './pokemonInfo.css';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      type: '',
      averageWeight: 0,
      image: '',
      summary: '',
      foundAt: [],
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const pokemon = this.props.pokemons.find(pokemon => pokemon.id === parseInt(id, 10));

    if (!pokemon) {
      console.log('ok');
      return <NotFound />;
    }

    const {name, type, averageWeight, image, summary, foundAt} = pokemon;

    this.setState({
      name,
      type,
      averageWeight,
      image,
      summary,
      foundAt,
    })
  }

  render() {
    const {name, type, averageWeight, image, summary, foundAt} = this.state;

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