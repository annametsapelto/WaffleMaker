import React from 'react';
import WaffleIngredient from './WaffleIngredient/WaffleIngredient';
import classes from './Waffle.css'

const waffle = (props) => {
    const ingredientsArray = Object.keys(props.ingredients).map(ingKey => {
        return[...Array(props.ingredients[ingKey])].map((_, i) => {
            return <WaffleIngredient key={ingKey + i} type={ingKey}  />
        });
    });
    return(
        <div className={classes.Waffle}>
            {ingredientsArray}
            <WaffleIngredient type='WaffleBottom'/>
        </div>
    ) 
}


export default waffle;