import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary'

class WaffleMaker extends Component {
    render() {
        return(<Aux>
            <div>Waffle</div>
            <div>Ingredients</div>
            <button>Buy</button>
        </Aux>)
    }
}

export default WaffleMaker;