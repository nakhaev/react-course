import React from 'react';
import classes from './Select.module.css';

const Select = props => {
    const {label, value, onChange, options} = props;
    const htmlFor = `${label}-${Math.random()}`;
    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{label}</label>
            <select
                value={value}
                onChange={onChange}
                id={htmlFor}
            >
                {(options||[]).map((option, index) => {
                    return <option key={option.value+index} value={option.value}>{option.text}</option>
                })}
            </select>
        </div>
    )
}

export default Select;
