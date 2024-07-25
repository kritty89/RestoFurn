import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box,Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Home, Store, Add, Info, ShoppingCart } from '@mui/icons-material';
import { Login, PersonAdd } from '@mui/icons-material';
import Logo from '../assets/download.svg';

function Navbar() {
const [anchorEl, setAnchorEl] = useState(null);
const location = useLocation();

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <AppBar position="static">
      <Toolbar className='nav'>
        <img src={Logo} alt="Logo" height={40} width={40} />
        <Typography variant="h3" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          RestoFurn
        </Typography>
        <Box display="flex">
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/productshome" startIcon={<Store />}>
            Products 
          </Button>
          <Button color="inherit" component={Link} to="/donation" startIcon={<Add />}>
            Donate
          </Button>
          <Button color="inherit" component={Link} to="/about" startIcon={<Info />}>
            About
          </Button>
          <Button color="inherit" onClick={handleClick} startIcon={<AccountCircleIcon />}>
            Account
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/login" onClick={handleClose}>
            <Login style={{ marginRight: 8 }} /> Login
          </MenuItem>
          <MenuItem component={Link} to="/register" onClick={handleClose}>
            <PersonAdd style={{ marginRight: 8 }} /> Register
          </MenuItem>
          </Menu>
          {location.pathname.includes('product') && (
          <Button color="inherit" component={Link} to="/cart">
            <ShoppingCart style={{ marginRight: 8 }} /> Cart
          </Button>
        )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;