import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../../appSlice'
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import axios from 'axios';
import config from '../../config';


function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const Auth = () => {
    const [formControls, setFormControls] = useState({
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Please, enter correct email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Password',
            errorMessage: 'Please, enter correct password',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    });

    const user = useSelector(state => state.app.user );
    console.log('user', user);
    const dispatch = useDispatch();

    const [isFormValid, setIsFormValid] = useState(false);

    const signInHandler = async () => {
        const authData = {
            email: formControls.email.value,
            password: formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post(config.signinEndpoint, authData);
            console.log('[Auth Success]: ', response.data);
            dispatch(setData({user: response.data}));

        } catch(error) {
            console.log('[Auth Error]: ', error);
        }
    };
    const signUpHandler = async () => {
        const authData = {
            email: formControls.email.value,
            password: formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios.post(config.signupEndpoint, authData);
            console.log('[Auth Success]: ', response.data);

        } catch(error) {
            console.log('[Auth Error]: ', error);
        }
    };
    const submitHandler = (e) => {
        e.preventDefault();
    };

    const validateControl = (value, rules) => {
        if(!rules) return true;
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.email) {
            isValid = validEmail(value) && isValid;
        }

        if(rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }

        return isValid;
    }
    const onChangeHandler = (event, controlName) => {
        let isFormValid = true;
        const controls = { ...formControls};
        const control = { ...controls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        controls[controlName] = control;

        setFormControls({ ...controls});

        Object.keys(controls).map(key => {
            if(!controls[key].valid) isFormValid = false;
            return key;
        })

        setIsFormValid(isFormValid);
    }
    const renderInputs = () => {
        return Object.keys(formControls).map((controlName, index) => {
            let control = formControls[controlName] || {};
            return <Input
                key={controlName+index}
                type={control.type}
                label={control.label}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                errorMessage={control.errorMessage}
                shouldValidate={!!control.validation}
                onChange={(event) => onChangeHandler(event, controlName)}
            />
        })
    }
    return (
        <div className={classes.Auth}>
            <div>
                <h1>Authorization</h1>
                <form onSubmit={submitHandler} className={classes.AuthForm}>
                    {renderInputs()}
                    <Button
                        type="success"
                        onClick={signInHandler}
                        disabled={!isFormValid}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="primary"
                        onClick={signUpHandler}
                        disabled={!isFormValid}
                    >
                        Sign Up
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default Auth;
