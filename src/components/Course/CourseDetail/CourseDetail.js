import React from 'react';
import classes from './CourseDetail.module.css';
import Aux from '../../../hoc/Auxiliary';
import CallToActionButton from '../CallToActionButton/CallToActionButton';

const courseDetail = (props) => {
    return (
        <Aux>
            <div style={{textAlign: 'center'}}>
                <h1>Nas Creator Course - NC2005B</h1>
                <p><strong style={{fontSize: '30px'}}>$2,700</strong></p>
                <p><span style={{color: 'red'}}>10</span> spots left in this course</p>
                <CallToActionButton 
                    clicked={props.openEnrolForm}
                    name="Enroll"/>                    
            </div>

            <div className={classes.CourseDetailBody}>
                <h3>Overview</h3>
                <p>
                    The Nas Academy helps people tell their stories using video. Our courses are unique – high energy, hard work and lots of fun. From the minute our course starts you will script, film, edit and present. No boring theory, this is about doing, experiencing and communicating.
                </p>
                <h3>What you'll learn</h3>
                <ul className={classes.Learn}>
                    <li>Scripting and Storytelling</li>
                    <li>Shooting video</li>
                    <li>Video editing</li>
                    <li>Publishing your story</li>
                </ul>
                <h3>Why we're unique</h3>
                <p>
                    The Nas Academy is the only place in the world where you will learn to understand the ‘Nas Factor’. Nas Academy courses aren’t just learning. They are an experience that will change your life. And help you create the change you want to see in the world.
                </p>
                <p className={classes.Note}>
                    <i>By enrolling in this course you agree to be bound by the <a href='https://www.thenasacademy.com/term-and-condition-enrolment'>Enrolment Terms and Conditions</a> as published.</i>
                </p>
            </div>
        </Aux>
    )
}

export default courseDetail;