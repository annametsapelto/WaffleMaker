import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button>Add</button>
        <button>Remove</button>
    </div>
);

export default buildControl;