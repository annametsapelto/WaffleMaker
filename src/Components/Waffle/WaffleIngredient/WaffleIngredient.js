import React, { Component } from 'react';
//import classes from './WaffleIngredients.module.css';
import './WaffleIngredients.module.css';
import PropTypes from 'prop-types';

class WaffleIngredient extends Component {
    render() {
        let ingredient = null;
    switch (this.props.type) {
        case('WaffleBottom'):
            ingredient = <div className="WaffleBottom"><p>WaffleBottom</p></div>; 
        break;
        case('ChocolateSauce'):
            ingredient = <div className="ChocolateSauce"><p>ChocolateSauce</p></div>;
        break;
        case('WhippedCream'):
            ingredient = <div className="WhippedCream"><p>WhippedCream</p></div>;
        break;
        case('StrawberryJam'):
            ingredient = <div className="StrawberryJam"><p>StrawberryJam</p></div>;
        break;
        case('BlueberryJam'):
            ingredient = <div className="BlueberryJam"><p>BlueberryJam</p></div>;
        break;

        default: ingredient = null;
    }
    return ingredient;
}
    
}
WaffleIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default WaffleIngredient