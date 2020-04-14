import React, { Component } from 'react';
import classes from './Course.module.css';
import CourseImage from './CourseAssets/CourseImage/CourseImage';
import Modal from '../UI/Modal/Modal';
import EnrolForm from './EnrolForm/EnrolForm';
import CallToActionButton from './CallToActionButton/CallToActionButton';

class Course extends Component {
    state = {
        showEnrolForm: false
    }

    closeEnrolFormHandler = () => {
        alert("closing")
        this.setState({showEnrolForm: false});
    }

    openEnrolFormHandler = () => {
        this.setState({showEnrolForm: true});
    }

    checkoutHandler = () => {
        alert("Checkout...")
    }

    render() {
        return (
            <div className={classes.Course}>
                <Modal
                    show={this.state.showEnrolForm}
                    closed={this.closeEnrolFormHandler}>
                    <EnrolForm 
                        clicked={this.checkoutHandler}/>
                </Modal>
                <div>
                    <CourseImage />
                </div>
                <div style={{textAlign: 'center'}}>
                    <h1>Nas Creator Course - NC2005B</h1>
                    <p><strong>$2,700.00</strong></p>
                    <p><span style={{color: 'red'}}>10</span> spots left in this course</p>
                    <CallToActionButton 
                        clicked={this.openEnrolFormHandler}
                        name="Enroll"/>                    
                </div>

                <p>
                    The Nas Academy helps people tell their stories using video. Our courses are unique – high energy, hard work and lots of fun. From the minute our course starts you will script, film, edit and present. No boring theory, this is about doing, experiencing and communicating.
                </p>
                <p>In this course, you will learn:</p>
                <ul>
                    <li>Scripting and Storytelling</li>
                    <li>Shooting video</li>
                    <li>Video editing</li>
                    <li>Publishing your story</li>
                </ul>
                <p>
                    The Nas Academy is the only place in the world where you will learn to understand the ‘Nas Factor’. Nas Academy courses aren’t just learning. They are an experience that will change your life. And help you create the change you want to see in the world.
                </p>
                <p>
                    Note: By enrolling in this course you agree to be bound by the <a href='https://www.thenasacademy.com/term-and-condition-enrolment'>Enrolment Terms and Conditions</a> as published.
                </p>
            </div>
        )
    }
}

export default Course;