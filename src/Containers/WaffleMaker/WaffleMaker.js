import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Waffle from '../../Components/Waffle/Waffle'

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
            <div>Ingredients</div>
            <button>Buy</button>
        </Aux>)
    }
}

export default WaffleMaker;