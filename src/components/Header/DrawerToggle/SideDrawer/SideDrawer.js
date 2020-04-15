import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show={true}/>
                <nav className={classes.SideDrawer}>
                <NavigationItems />
            </nav>
        </Aux>
    )
}

export default sideDrawer;