import React from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

const Auth = props => {
    const signInHandler = () => {
        console.log('Sign In');
    }
    const signUpHandler = () => {
        console.log('Sign Up');
    }
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className={classes.Auth}>
            <div>
                <h1>Authorization</h1>
                <form onSubmit={submitHandler} className={classes.AuthForm}>
                    <Input type="text" label="Email"/>
                    <Input type="text" label="Password" errorMessage="test"/>
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
