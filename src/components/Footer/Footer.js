import React from 'react';
import classes from './Footer.module.css';
import Logo from '../Header/Logo/Logo';

const footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Logo}>
                <Logo />
                <p>WE <span style={{color:'#FACB15'}}>CREATE</span> CREATORS</p>
            </div>
            <div className={classes.OtherInfo}>
                <div className={classes.Service}>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Online Classes</li>
                        <li>Teen Creator</li>
                        <li>Corporate Video Making</li>
                    </ul>
                </div>
                <div className={classes.Social}>
                    <h3>Connect With Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer;