import React from 'react';
import classes from './CheckoutButton.module.css';

const checkoutButton = (props) => {
    return (
        <button className={classes.CheckoutButton}>{props.name}</button>
    )
}

export default checkoutButton;