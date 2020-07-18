import React from 'react';
import waffleLogo from '../../assets/images/waffles.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={waffleLogo} alt="Waffle House"/>
    </div>
)

export default logo;