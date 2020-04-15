import React from 'react';
import classes from './NavigationItems.module.css';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems} style={{listStyle: 'none'}}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Student Projects</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
        </ul>
    )
}

export default navigationItems;