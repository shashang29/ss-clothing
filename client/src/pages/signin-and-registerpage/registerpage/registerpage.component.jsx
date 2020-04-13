import React from 'react';

import Register from '../../../components/register/register.component';

import {SignInAndRegisterContainer} from '../signin-and-register.styles';

const RegisterPage = () => (
  <SignInAndRegisterContainer>
    <Register />
  </SignInAndRegisterContainer>
);

export default RegisterPage;
