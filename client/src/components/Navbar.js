import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import { Home, Store, Add, Info, ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          RestoFurn
        </Typography>
        <Box display="flex">
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/products" startIcon={<Store />}>
            Products
          </Button>
          <Button color="inherit" component={Link} to="/donate" startIcon={<Add />}>
            Donate
          </Button>
          <Button color="inherit" component={Link} to="/about" startIcon={<Info />}>
            About
          </Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCart />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;