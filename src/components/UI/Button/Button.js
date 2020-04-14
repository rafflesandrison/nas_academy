import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
    return (
        <button 
            className={classes.Button}>{props.name}</button>
    )
}

export default button;