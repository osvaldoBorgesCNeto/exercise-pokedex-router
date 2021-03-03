import React from "react";
import './pokemonInfo.css';

class About extends React.Component {
  render() {
    return (
      <div className="page-info">
        <h1>About Pokédex</h1>
        <p>
        The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.
        </p>
        <div className="sectionPokedex">
          <img className="imgPokedex" src="https://cdn.bulbagarden.net/upload/8/86/Gen_I_Pok%C3%A9dex.png" alt="imagePokedex" />
          <img className="imgPokedex" src="https://cdn.bulbagarden.net/upload/3/36/479Rotom-Pok%C3%A9dex.png" alt="imagePokedex" />
        </div>        
      </div>
    );
  }
}

export default About;