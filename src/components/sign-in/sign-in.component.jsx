import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


const SignIn = () => {

    const [userInputs, setUserInputs] = useState({
        email: '',
        password: ''
    });

    const { email, password } = userInputs;
    
    const handleSubmit = async event => {
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setUserInputs({ email: '', password: '' });

        } catch (err) {
            console.log(err)
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserInputs({ ...userInputs, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h1>Sign In</h1>
            <form className='sign-in-form'
                onSubmit={handleSubmit} >
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='button-container'>
                    <CustomButton type='submit' > Sign in </CustomButton>
                    <CustomButton type='button' 
                    onClick={signInWithGoogle} 
                    isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;