import React from 'react'
import './pokemonInfo.css';

class NotFound extends React.Component {
  render() {
    return (
        <div>
            <img className="image404" src="https://static3.thegamerimages.com/wordpress/wp-content/uploads/2020/02/Pokemon-404-page.jpg?q=50&fit=crop&w=943&h=500" alt="no-page"/>
        </div>
    );
  }
}

export default NotFound;