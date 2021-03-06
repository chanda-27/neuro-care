import { faBars, faEnvelope, faHome, faSignInAlt, faSignOutAlt, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Divider, IconButton, Menu, MenuItem, Tooltip, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { getAuth, signOut } from "firebase/auth";
import '../Login/firebase.config';

const Header = () => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const matches960px = useMediaQuery('(min-width:960px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      setLoggedInUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('displayName');
      localStorage.removeItem('email');
      localStorage.removeItem('photoURL');
      alert("Logged out successfully!");
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }
  return (
    <Box sx={{position: 'sticky', top: 0, zIndex: 1100}}>
      <Box sx={{color: '#122136', bgcolor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to="/">
          <Box sx={{padding: 1, fontSize: 24}}>
            <Box sx={{color: '#11b8ca'}}>NEURO</Box>
            <Box sx={{color: '#ffb545', letterSpacing: '5px'}}>CARE</Box>
          </Box>
        </Link>
        <Box sx={{padding: 1}}>
          {
            matches960px &&
            <Box>
              <Link to="/"><Button color="secondary">Home</Button></Link>
              <Link to="/doctors"><Button color="secondary">Doctors</Button></Link>
              <Link to="/contact"><Button color="secondary">Contact Us</Button></Link>
              {
                !loggedInUser &&
                <Link to="/login"><Button color="secondary">Login</Button></Link>
              }
              {
                loggedInUser &&
                <Link to="/" onClick={handleLogOut}><Button color="secondary">Logout</Button></Link>
              }
            </Box>
          }
          {
            !matches960px &&
            <Box>
              <Tooltip title="Menu">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar>
                    <FontAwesomeIcon icon={faBars} />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Link to="/">
                  <MenuItem>
                    <Avatar>
                      <FontAwesomeIcon icon={faHome} />
                    </Avatar> Home
                  </MenuItem>
                </Link>
                <Link to="/doctors">
                  <MenuItem>
                    <Avatar>
                      <FontAwesomeIcon icon={faUserMd} />
                    </Avatar> Doctors
                  </MenuItem>
                </Link>
                <Link to="/contact">
                  <MenuItem>
                    <Avatar>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </Avatar> Contact
                  </MenuItem>
                </Link>
                <Divider />
                {
                  !loggedInUser &&
                  <Link to="/login">
                    <MenuItem>
                      <Avatar>
                        <FontAwesomeIcon icon={faSignInAlt} />
                      </Avatar> Login
                    </MenuItem>
                  </Link>
                }
                {
                  loggedInUser &&
                  <Link to="/" onClick={handleLogOut}>
                    <MenuItem>
                      <Avatar>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                      </Avatar> Logout
                    </MenuItem>
                  </Link>
                }
              </Menu>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Header;