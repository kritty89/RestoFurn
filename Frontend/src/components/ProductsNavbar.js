import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';

function ProductsNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <AppBar position="static" color="secondary" className="products-navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Shop By
        </Typography>
        <Box display="flex">
        <Button color="inherit" component={Link} to="/products">All Products</Button>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'price')} >Price</Button>
        <Menu anchorEl={anchorEl} open={openMenu === 'price'} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Under 25$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Under 50$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Under 75$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Under 100$
          </MenuItem>
          </Menu>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'material')} >Material</Button>
        <Menu anchorEl={anchorEl} open={openMenu === 'material'} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Wood
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Steel
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Plastic
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Fabric
          </MenuItem>
          </Menu>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, 'furniture')}>Furniture Type</Button>
        <Menu anchorEl={anchorEl} open={openMenu === 'furniture'} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Table
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Sofa
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Chair
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Bed
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Desk
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Dressing Table
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleMenuClose}>
          Crib
          </MenuItem>
          </Menu>
          </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ProductsNavbar;