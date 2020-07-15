import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Waffle from '../../Components/Waffle/Waffle'
import BuildControls from '../../Components/Waffle/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    WhippedCream: 0.5,
    ChocolateSauce: 0.8,
    StrawberryJam: 0.3,
    BlueberryJam: 0.3
}
class WaffleMaker extends Component {
    state = {
        ingredients: {
            WhippedCream: 0,
            ChocolateSauce: 0,
            StrawberryJam: 0,
            BlueberryJam: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const upgradedIngredients = {
            ... this.state.ingredients
        };
        upgradedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: upgradedIngredients});
    }

    removeIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] -1;
        const upgradedIngredients = {
            ... this.state.ingredients
        };
        upgradedIngredients[type] = updatedCount;
        const priceDeducted = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice - priceDeducted;
        this.setState({totalPrice: newPrice, ingredients: upgradedIngredients});
    }

    render() {
        return(
        <Aux>
            <Waffle ingredients={this.state.ingredients}/>
            <BuildControls 
              addIngredient={this.addIngredientHandler}
              removeIngredient={this.removeIngredientHandler}/>
            <button>Buy</button>
        </Aux>)
    }
}

export default WaffleMaker;