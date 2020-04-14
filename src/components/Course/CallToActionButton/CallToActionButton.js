import React from 'react';
import classes from './CallToActionButton.module.css';

const callToActionButton = (props) => {
    return (
        <button 
            onClick={props.clicked}
            className={classes.CallToActionButton}>{props.name}</button>
    )
}

export default callToActionButton;