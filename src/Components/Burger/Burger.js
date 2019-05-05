import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    /* 
        1. Take keys from 'props.ingredients' object
        2. Create an array (with undefined values) of size equal to value of each key
        3. return JSX with key (mandatory bcz we return list of elements here) and type
    */
    // Converting object into Array of the value if the ingredients
    // Object.keys(anyObject) -> Javascript method to get keys of an object
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // Array(size) -> Javascript method to create undefined array of length 'size'
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        });
    return (
        // Wrapping in <div> bcz we want to apply styles here
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;