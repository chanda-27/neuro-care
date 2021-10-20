import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import '../Login/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LoginForm = ({ loginError, setLoginError }) => {
  // Use History Hook
  const history = useHistory();
  // Use Location Hook
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // This state is define is the person a new user or not
  const [newUser, setNewUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    console.log(event.target.name);
    event.target.name === 'displayName' &&
    setUserData({ ...userData, displayName: event.target.value });
    event.target.name === 'email' &&
    setUserData({ ...userData, email: event.target.value });
    event.target.name === 'password' &&
    setUserData({ ...userData, password: event.target.value });
    event.target.name === 'confirmPassword' &&
    setUserData({ ...userData, confirmPassword: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginError(null);
    const auth = getAuth();
    newUser &&
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: userData.displayName, photoURL: "https://drive.google.com/uc?id=1jC9hRAPa5MA0DdmNtMd0Y1VV_6Iff3Me"
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        setUserData({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // ..
        setLoginError(errorMessage);
      });

    !newUser &&
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        const { accessToken, displayName, email, photoURL } = user;
        setLoggedInUser({ accessToken, displayName, email, photoURL });
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('email', email);
        localStorage.setItem('photoURL', photoURL);
        setUserData({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        })
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle login text
  const handleLoginText = (newUser) ? "Register" : "Login";
  // Handle toggler
  const newUserToggler = (newUser) ?
    <Box>Already have an account?<Box sx={{color: '#11b8ca', cursor: 'pointer'}} onClick={() => setNewUser(!newUser)}>Login</Box></Box> :
    <Box>Don't have an account?<Box sx={{color: '#11b8ca', cursor: 'pointer'}} onClick={() => setNewUser(!newUser)}>Create an account</Box></Box>;

  const isEmailValid = /^\S+@\S+\.\S+$/g.test(userData.email);
  const isPasswordValid = /^(?=.*\d).{6,}$/g.test(userData.password);
  const tooltipText = <i style={{fontSize: '15px'}}>Please insert a valid email, phone number (without an space), and password! Your password should be match with confirm password!</i>

  const signUpDisabled = () => {
    return (
      !isEmailValid ||
      !isPasswordValid ||
      userData.password !== userData.confirmPassword ?
      <Tooltip title={tooltipText} arrow>
        <span>
          <Button variant="contained" disabled style={{width: '100%'}}>
            Sign Up
          </Button>
        </span>
      </Tooltip> : ''
    );
  }
  return (
    <Box>
      <Box sx={{border: '1px solid #11b8ca', borderRadius: '10px', p: 5}}>
        <Typography component="h2" variant="h4" sx={{pb: 1, color: '#122136'}}>{handleLoginText}</Typography>
        <Box sx={{height: '1px', width: '30%', bgcolor: '#ffb545'}}></Box>
        { loginError && <Typography component="h6" variant="h6" color="red" textAlign="center" py={3}>{loginError}</Typography> }
        <form onSubmit={handleSubmit}>
          {
            newUser &&
            <FormControl sx={{width: '100%', py: 1}}>
              <TextField id="displayName" label="Full Name" variant="standard" name="displayName" value={userData.displayName} onChange={handleChange} required />
            </FormControl>
          }
          <FormControl sx={{width: '100%', py: 1}}>
            <TextField id="email" label="Email" variant="standard" name="email" value={userData.email} onChange={handleChange} required />
            {
              !isEmailValid && <small style={{fontStyle: 'italic'}}>Please insert a valid email address! (example@example.com)</small>
            }
          </FormControl>
          <FormControl sx={{width: '100%', py: 1}} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={userData.password}
              onChange={handleChange}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prevCheck => !prevCheck)}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
            {
              !isPasswordValid && <small style={{fontStyle: 'italic'}}>Please insert a valid password! (Password lenght minimum 6 characters)</small>
            }
          </FormControl>
          {
            newUser &&
            <FormControl sx={{width: '100%', py: 1}}>
              <TextField type="password" id="confirmPassword" label="Confirm Password" variant="standard" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} required />
              {
                userData.password !== userData.confirmPassword && <small style={{fontStyle: 'italic'}}>Your password didn't match!</small>
              }
            </FormControl>
          }
          {
            newUser &&
            isEmailValid &&
            isPasswordValid &&
            userData.password === userData.confirmPassword &&
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#11b8ca' }}
            >
              Sign Up
            </Button>
          }
          {
            newUser && signUpDisabled()
          }
          {
            !newUser &&
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#11b8ca' }}
            >
              Login
            </Button>
          }
        </form>
        <Box sx={{pt: 1, textAlign: 'center'}}>{newUserToggler}</Box>
      </Box>
    </Box>
  );
};

export default LoginForm;