import React from 'react';
import classes from './Input.module.css';
import Aux from '../../../hoc/Auxiliary';

const input = (props) => {
    return (
        <Aux>
            <input 
                className={classes.Input}
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder}/>
        </Aux>
    )
}

export default input;