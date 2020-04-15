import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';

const header = () => (
    <div className={classes.Header}>
        <div className={classes.Logo}><Logo /></div>
        <div>Menu</div>
    </div>
)

export default header;