import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <li 
        className="NavigationItem"> 
        <a href={props.link}
        classname={props.active ? "Active" : null}></a>
        {props.children}
    </li>
);

export default navigationItem;