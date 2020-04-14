import React from 'react';
import classes from './SelectOption.module.css';
import countries from '../../../data/countries';

const options = countries.map(country => {
    let option;
    if (country.country === 'Singapore') {
        option = (<option 
                    selected
                    value={country.country.toLowerCase()}>
                    {country.country}
                </option>);
    } else {
        option = (<option 
                    value={country.country.toLowerCase()}>
                    {country.country}
                </option>)
    }
    return option;
})

const selectOption = () => {

    return (
        <select name="countryRegion" className={classes.SelectOption}>
            {options}
        </select>
    )
}

export default selectOption;