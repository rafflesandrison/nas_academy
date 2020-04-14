import React from 'react';
import Input from '../../UI/Input/Input';
import SelectOption from '../../UI/SelectOption/SelectOption';
import Checkbox from '../../UI/Checkbox/Checkbox';

const enrolForm = () => {
    return (
        <form>
            <h3>Contact Information</h3>
            <Input 
                type="email"
                name="email"
                placeholder="Email"/>
            <Checkbox label="Keep me up to date on news and exclusive offers"/>

            <h3>Billing address</h3>
            <Input 
                type="text"
                name="firstName"
                placeholder="First Name"/>
            <Input 
                type="text"
                name="lastName"
                placeholder="Last Name"/>
            <Input 
                type="text"
                name="address"
                placeholder="Address"/>
            <Input 
                type="text"
                name="addressAdditional"
                placeholder="Apartment, suite, etc. (optional)"/>
            <Input 
                type="text"
                name="city"
                placeholder="City"/>
            <p>--- COUNTRY / REGION ---</p>
            <SelectOption />
            <Input 
                type="text"
                name="postalCode"
                placeholder="Postal Code"/>
            <Input 
                type="text"
                name="phone"
                placeholder="Phone"/>

            
        </form>
    )
}

export default enrolForm;