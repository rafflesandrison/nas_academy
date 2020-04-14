import React from 'react';
import classes from './CallToActionButton.module.css';

const callToActionButton = (props) => {
    return (
        <button className={classes.CallToActionButton}>{props.name}</button>
    )
}

export default callToActionButton;