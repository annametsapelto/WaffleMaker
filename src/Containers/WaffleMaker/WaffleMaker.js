import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'
import Waffle from '../../Components/Waffle/Waffle'

class WaffleMaker extends Component {
    state = {
        ingredients: {
            WhippedCream: 1,
            ChocolateSauce: 1,
            BlueberryJam: 2,
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