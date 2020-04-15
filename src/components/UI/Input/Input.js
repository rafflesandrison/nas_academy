import React from 'react';
import classes from './Input.module.css';
import Aux from '../../../hoc/Auxiliary';

const input = (props) => {
    return (
        <Aux>
            <input 
                onChange={props.changed}
                className={classes.Input}
                type={props.type} 
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}/>
        </Aux>
    )
}

export default input;