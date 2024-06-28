import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';

function ProductsNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <AppBar position="static" color="secondary" className="products-navbar">
      <Toolbar>
        <Typography variant="h6" className="title">
          Shop By
        </Typography>
        <Button color="inherit" component={Link} to="/products">All Products</Button>
        <Button color="inherit" onClick={handleClick} >Price</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Under 25$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Under 50$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Under 75$
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Under 100$
          </MenuItem>
          </Menu>
        <Button color="inherit" onClick={handleClick} >Material</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Wood
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Steel
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Plastic
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Fabric
          </MenuItem>
          </Menu>
        <Button color="inherit" onClick={handleClick} >Furniture Type</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Table
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Sofa
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Chair
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Bed
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Desk
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Dressing Table
          </MenuItem>
          <MenuItem component={Link} to="/products" onClick={handleClose}>
          Crib
          </MenuItem>
          </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default ProductsNavbar;