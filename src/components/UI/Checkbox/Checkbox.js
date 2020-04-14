import React from 'react';
import classes from './Checkbox.module.css';

const checkbox = (props) => {
    return (
        <label className={classes.Container}>
            {props.label}
            <input type="checkbox" checked="checked" />
            <span className={classes.Checkmark}></span>
        </label>
        
    )
}

export default checkbox;