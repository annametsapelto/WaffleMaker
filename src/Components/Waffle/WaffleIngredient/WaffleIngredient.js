import React, { Component } from 'react';
import classes from './WaffleIngredients.css'
import PropTypes from 'prop-types';

class WaffleIngredient extends Component {
    render() {
        let ingredient = null;
    switch (this.props.type) {
        case('WaffleBottom'):
            ingredient = <div className={classes.WaffleBottom}><p>WaffleBottom</p></div>; 
        break;
        case('ChocolateSauce'):
            ingredient = <div className={classes.ChocolateSauce}><p>ChocolateSauce</p></div>;
        break;
        case('WhippedCream'):
            ingredient = <div className={classes.WhippedCream}><p>WhippedCream</p></div>;
        break;
        case('StrawberryJam'):
            ingredient = <div className={classes.StrawberryJam}><p>StrawberryJam</p></div>;
        break;
        case('BlueberryJam'):
            ingredient = <div className={classes.BlueberryJam}><p>BlueberryJam</p></div>;
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