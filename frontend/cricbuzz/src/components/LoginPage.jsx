import { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import logo from '../assets/cricbuzz-logo.svg';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    marginTop: '.3rem',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  dropdown: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    minWidth: '160px',
    boxShadow: `0px 8px 16px 0px rgba(0,0,0,0.2)`,
    zIndex: 1,
  },
  menuIcon: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
    width: '100px',
    height: '40px',
    objectFit: 'contain',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const LoginPage = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.substring(1));
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: '#009270',
        }}>
        <Toolbar>
          <div
            id="menu-bar"
            className={classes.sectionDesktop}
            style={{
              justifyContent: 'space-evenly',
              margin: 'auto',
              width: '100%',
              marginBottom: '10px',
            }}>
            <div>
              <img
                src={logo}
                onClick={() => {
                  setActive('login');
                  navigate('/login');
                }}
                className={classes.logo}
                alt="team image"
                fetchpriority="high"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
