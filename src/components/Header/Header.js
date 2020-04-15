import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';

const header = (props) => (
    <div className={classes.Header}>
        <DrawerToggle clicked={props.openSideDrawer} />
        <div className={classes.Logo}><Logo /></div>
        <div>Cart</div>
    </div>
)

export default header;