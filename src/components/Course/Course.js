import React, { Component } from 'react';
import classes from './Course.module.css';
import CourseImage from './CourseAssets/CourseImage/CourseImage';
import Modal from '../UI/Modal/Modal';
import EnrolForm from './EnrolForm/EnrolForm';
import CourseDetail from './CourseDetail/CourseDetail';

class Course extends Component {
    state = {
        enrolData: {
            email: null,
            wantNewsLetter: false,
            firstName: null,
            lastName: null,
            address: null,
            addressAdditional: null,
            city: null,
            country: null,
            postalCode: null,
            phone: null,
        },
        showEnrolForm: false
    }

    closeEnrolFormHandler = () => {
        this.setState({showEnrolForm: false});
    }

    openEnrolFormHandler = () => {
        this.setState({showEnrolForm: true});
    }

    enrolFormIsValid = () => {
        Object.keys(this.state.enrolData).map(key => {
            
        })
    }

    checkboxHandler = () => {
        let updatedEnrolData = {...this.state.enrolData};
        
        this.setState(prevState => {
            updatedEnrolData['wantNewsLetter'] = !prevState.enrolData.wantNewsLetter;
            return {
                enrolData: updatedEnrolData
            }
        })
    }

    onInputChangeHandler = (e) => {
        let oldEnrolData = {...this.state.enrolData};
        let newValue = e.target.value;
        oldEnrolData[e.target.name] = newValue.toString();
        this.setState({enrolData: oldEnrolData});
        console.log("event.target", e.target);
        console.log("prevstate", this.state.enrolData)
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
                        data={this.state.enrolData}
                        checkboxHandler={this.checkboxHandler}
                        changed={this.onInputChangeHandler}
                        clicked={this.checkoutHandler}/>
                </Modal>
                <CourseImage />
                <CourseDetail openEnrolForm={this.openEnrolFormHandler}/>
            </div>
        )
    }
}

export default Course;