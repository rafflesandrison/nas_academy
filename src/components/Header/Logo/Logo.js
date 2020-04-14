import React from 'react';
import nasDaily from '../../../assets/nas-daily.png';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={nasDaily} alt="Nas Daily" />
    </div>
)

export default logo;