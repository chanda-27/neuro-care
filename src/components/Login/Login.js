import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ExtraLogin from '../ExtraLogin/ExtraLogin';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  return (
    <Box sx={{bgcolor: '#f0f8ff', py: 8}}>
      <Container maxWidth="md">
        <LoginForm loginError={loginError} setLoginError={setLoginError}></LoginForm>
        <Typography variant="h5" component="h5" textAlign="center" py={5}>Or</Typography>
        <ExtraLogin setLoginError={setLoginError}></ExtraLogin>
      </Container>
    </Box>
  );
};

export default Login;