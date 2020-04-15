import React, { Component } from 'react';
import classes from './Course.module.css';
import CourseImage from './CourseAssets/CourseImage/CourseImage';
import Modal from '../UI/Modal/Modal';
import EnrolForm from './EnrolForm/EnrolForm';
import CourseDetail from './CourseDetail/CourseDetail';

class Course extends Component {
    state = {
        showEnrolForm: false
    }

    closeEnrolFormHandler = () => {
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
                <CourseImage />
                <CourseDetail openEnrolForm={this.openEnrolFormHandler}/>
            </div>
        )
    }
}

export default Course;