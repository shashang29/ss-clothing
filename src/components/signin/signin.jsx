import React from 'react';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' });

        } catch (err) {
            console.log(err)
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h1>Sign In</h1>
                <form className='sign-in-form'
                    onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='button-container'>
                        <Button type='submit' > Sign in </Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;