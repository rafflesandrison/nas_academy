import React from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop 
                clicked={props.closed}
                show={props.show}/>
            <nav className={classes.SideDrawer} hidden={!props.show}>
                <NavigationItems />
            </nav>
        </Aux>
    )
}

export default sideDrawer;