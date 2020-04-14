import React from 'react';
import teamPhoto from '../../../../assets/team.png';
import classes from './CourseImage.module.css';


const courseImage = () => {
    return (
        <div className={classes.CourseImage}>
            <img src={teamPhoto} alt='team-photo' />
        </div>
    )
}

export default courseImage;