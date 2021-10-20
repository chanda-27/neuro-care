import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleService from './components/SingleService/SingleService';
import { useMediaQuery } from '@mui/material';
import ExtraHeader from './components/ExtraHeader/ExtraHeader';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';

export const UserContext = createContext();

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('email');
  const photoURL = localStorage.getItem('photoURL');
  const [loggedInUser, setLoggedInUser] = useState( accessToken ? { accessToken, displayName, email, photoURL } : null );
  const matches960px = useMediaQuery('(min-width:960px)');
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        { matches960px && <ExtraHeader></ExtraHeader> }
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <SingleService></SingleService>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
