import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Home, Store, Add, Info, ShoppingCart } from '@mui/icons-material';
import { Login, PersonAdd } from '@mui/icons-material';
import Logo from '../assets/download.svg';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || { user: null };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    if (path) {
      navigate(path, { state: { user } });
    }
  };

  const handleLogout = (path) => {
    setAnchorEl(null);
    if (path) {
    navigate(path, { state:  null });
    }
  };

  const handleNavigate = (path) => {
    navigate(path, { state: { user } });
  };

  return (
    <AppBar position="static">
      <Toolbar className='nav'>
        <img src={Logo} alt="Logo" height={40} width={40} />
        <Typography variant="h3" onClick={() => handleNavigate('/')} style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          RestoFurn
        </Typography>
        <Box display="flex">
          <Button color="inherit" onClick={() => handleNavigate('/')} startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleNavigate('/productshome')} startIcon={<Store />}>
            Products
          </Button>
          <Button color="inherit" onClick={() => handleNavigate('/donation')} startIcon={<Add />}>
            Donate
          </Button>
          <Button color="inherit" onClick={() => handleNavigate('/about')} startIcon={<Info />}>
            About
          </Button>
          <Button color="inherit" onClick={handleClick} startIcon={<AccountCircleIcon />}>
            Account
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(null)}>
            {user ? (
              <div>
                <MenuItem onClick={() => handleLogout('/login')}>
                  <PersonAdd style={{ marginRight: 8 }} /> Logout
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem onClick={() => handleClose('/login')}>
                  <Login style={{ marginRight: 8 }} /> Login
                </MenuItem>
                <MenuItem onClick={() => handleClose('/register')}>
                  <PersonAdd style={{ marginRight: 8 }} /> Register
                </MenuItem>
              </div>
            )}
          </Menu>
          {location.pathname.includes('product') && (
            <Button color="inherit" onClick={() => handleNavigate('/cart')}>
              <ShoppingCart style={{ marginRight: 8 }} /> Cart
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
