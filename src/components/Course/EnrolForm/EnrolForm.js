import React from 'react';
import classes from './EnrolForm.module.css';

import Input from '../../UI/Input/Input';
import SelectOption from '../../UI/SelectOption/SelectOption';
import Checkbox from '../../UI/Checkbox/Checkbox';
import CheckoutButton from './CheckoutButton/CheckoutButton';

const enrolForm = (props) => {
    return (
        <form className={classes.EnrolForm}>
            <h3>Contact Information</h3>
            <Input 
                required={true}
                changed={props.changed}
                type="email"
                name="email"
                value={props.data.email}
                placeholder="Email"/>
            <Checkbox 
                checked={props.data.wantNewsLetter}
                clicked={props.checkboxHandler}
                label="Keep me up to date on news and exclusive offers"/>

            <h3>Billing address</h3>
            <Input
                required={true}
                changed={props.changed}
                type="text"
                name="firstName"
                value={props.data.firstName}
                placeholder="First Name"/>
            <Input
                required={true}
                changed={props.changed}
                type="text"
                name="lastName"
                value={props.data.lastName}
                placeholder="Last Name"/>
            <Input 
                required={true}
                changed={props.changed}
                type="text"
                name="address"
                value={props.data.address}
                placeholder="Address"/>
            <Input 
                changed={props.changed}
                type="text"
                name="addressAdditional"
                value={props.data.addressAdditional}
                placeholder="Apartment, suite, etc. (optional)"/>
            <Input 
                changed={props.changed}
                type="text"
                name="city"
                value={props.data.city}
                placeholder="City"/>
            <SelectOption />
            <Input 
                required={true}
                changed={props.changed}
                type="number"
                name="postalCode"
                value={props.data.postalCode}
                placeholder="Postal Code"/>
            <Input 
                required={true}
                changed={props.changed}
                type="number"
                name="phone"
                value={props.data.phone}
                placeholder="Phone"/>
            <div style={{textAlign: 'center'}}>
                <CheckoutButton 
                    clicked={props.clicked}
                    name="Checkout"/>
            </div>
        </form>
    )
}

export default enrolForm;