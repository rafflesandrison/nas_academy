import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const header = () => (
    <div className={classes.Header}>
        <DrawerToggle />
        <div className={classes.Logo}><Logo /></div>
        <div>Cart</div>
    </div>
)

export default header;