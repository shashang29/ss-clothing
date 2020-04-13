import React from 'react';

import SignIn from '../../../components/sign-in/sign-in.component';

import {SignInAndRegisterContainer} from '../signin-and-register.styles';

const SignInPage = () => (
  <SignInAndRegisterContainer>
    <SignIn />
  </SignInAndRegisterContainer>
);

export default SignInPage;
