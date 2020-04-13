import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';


import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

import { RegisterContainer, RegisterTitle, RegisterForm, ButtonContainer } from './register.styles'


const Register = () => {

    const [userInputs, setUserInputs] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userInputs;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setUserInputs({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setUserInputs({ ...userInputs, [name]: value });
    };

    return (
        <RegisterContainer>
            <RegisterTitle>Register</RegisterTitle>
            <RegisterForm
                onSubmit={handleSubmit} >
                <FormInput
                    name='displayName'
                    type='text'
                    handleChange={handleChange}
                    value={displayName}
                    label='Name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='Email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <ButtonContainer>
                    <CustomButton type='submit' > Register </CustomButton>
                    <CustomButton type='button'
                        onClick={signInWithGoogle}
                        isGoogleSignIn> Register with Google </CustomButton>
                </ButtonContainer>
            </RegisterForm>
        </RegisterContainer>
    );
}

export default Register;