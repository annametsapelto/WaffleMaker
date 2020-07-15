import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Whipped Cream', type: 'WhippedCream'},
    {label: 'Chocolate Sauce', type: 'ChocolateSauce'},
    {label: 'Strawberry Jam', type: 'StrawberryJam'},
    {label: 'Blueberry Jam', type: 'BlueberryJam'}
]
const buildControls = (props) => (
    <div className="BuildControls">
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))};
    </div>
)
export default buildControls;