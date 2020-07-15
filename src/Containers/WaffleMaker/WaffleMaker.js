import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Waffle from '../../Components/Waffle/Waffle'
import BuildControls from '../../Components/Waffle/BuildControls/BuildControls';

class WaffleMaker extends Component {
    state = {
        ingredients: {
            WhippedCream: 0,
            ChocolateSauce: 0,
            BlueberryJam: 0
        }
    }
    render() {
        return(
        <Aux>
            <Waffle ingredients={this.state.ingredients}/>
            <BuildControls />
            <button>Buy</button>
        </Aux>)
    }
}

export default WaffleMaker;