import React from 'react';
import classes from './Checkbox.module.css';

const checkbox = (props) => {
    return (
        <label className={classes.Container}>
            {props.label}
            <input type="checkbox" checked={props.checked} onClick={props.clicked}/>
            <span className={classes.Checkmark}></span>
        </label>
    )
}

export default checkbox;