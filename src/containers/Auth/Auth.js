import React, { useState } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';


function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const Auth = props => {
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
    const signInHandler = () => {
        console.log('Sign In');
    };
    const signUpHandler = () => {
        console.log('Sign Up');
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
        const controls = { ...formControls};
        const control = { ...controls[controlName]};

        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(control.value, control.validation);

        setFormControls((prevState) => {
            return { ...prevState, [controlName]: control}
        })
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
                    >
                        Sign In
                    </Button>
                    <Button
                        type="primary"
                        onClick={signUpHandler}
                    >
                        Sign Up
                    </Button>
                </form>

            </div>
        </div>
    )
}

export default Auth;
