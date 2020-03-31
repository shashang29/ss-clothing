import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase.utils';

import './register.styles.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (err) {
            console.log(err);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='register'>
                <h1>Register</h1>
                <form className='register-form'
                    onSubmit={this.handleSubmit} >
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <div className='button-container'>
                        <Button type='submit' > Register </Button>
                        <Button type='button' 
                        onClick={signInWithGoogle} 
                        isGoogleSignIn> Register with Google </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;