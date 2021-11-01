import React from 'react';
import classes from './Input.module.css';

const isInvalid = (props) => {
    const {valid, touched, shouldValidate} = props;
    return !valid && shouldValidate && touched;
}

const Input = props => {
    const {type, label, value, onChange, errorMessage} = props;
    const inputType = type || 'text';
    const cls = [classes.Input];
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)) {
        cls.push(classes.invalid);
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{label}</label>
            <input
                id={htmlFor}
                value={value}
                type={inputType}
                onChange={onChange}
            />
            {
                isInvalid(props)
                ? <span>{errorMessage || 'this value is invalid...'}</span>
                : null
            }
        </div>
    )
}

export default Input;
