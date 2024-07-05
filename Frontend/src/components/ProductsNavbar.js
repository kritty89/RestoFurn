import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductsNavbar = ({ onFilter }) => {
  const [anchorElMaterial, setAnchorElMaterial] = React.useState(null);
  const [anchorElPrice, setAnchorElPrice] = React.useState(null);
  const [anchorElFurnitureType, setAnchorElFurnitureType] = React.useState(null);

  const navigate = useNavigate();

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  const handleFilter = (filter) => {
    const queryParams = new URLSearchParams(filter).toString();
    navigate(`/products?${queryParams}`);
    handleMenuClose(setAnchorElMaterial);
    handleMenuClose(setAnchorElPrice);
    handleMenuClose(setAnchorElFurnitureType);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Shop By
        </Typography>
        <Box display="flex">
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, setAnchorElPrice)}>All Products</Button>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, setAnchorElPrice)}>Price</Button>
        <Menu
          anchorEl={anchorElPrice}
          keepMounted
          open={Boolean(anchorElPrice)}
          onClose={() => handleMenuClose(setAnchorElPrice)}
        >
          <MenuItem onClick={() => handleFilter({ minPrice: 0, maxPrice: 50 })}>Under $50</MenuItem>
          <MenuItem onClick={() => handleFilter({ minPrice: 50, maxPrice: 75 })}>$50 - $75</MenuItem>
          <MenuItem onClick={() => handleFilter({ minPrice: 75, maxPrice: 100 })}>$75 - $100</MenuItem>
          <MenuItem onClick={() => handleFilter({ minPrice: 100 })}>$100 & Above</MenuItem>
        </Menu>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, setAnchorElMaterial)}>Material</Button>
        <Menu
          anchorEl={anchorElMaterial}
          keepMounted
          open={Boolean(anchorElMaterial)}
          onClose={() => handleMenuClose(setAnchorElMaterial)}
        >
          <MenuItem onClick={() => handleFilter({ material: 'wood' })}>Wood</MenuItem>
          <MenuItem onClick={() => handleFilter({ material: 'steel' })}>Steel</MenuItem>
          <MenuItem onClick={() => handleFilter({ material: 'plastic' })}>Plastic</MenuItem>
          <MenuItem onClick={() => handleFilter({ material: 'fabric' })}>Fabric</MenuItem>
        </Menu>
        <Button color="inherit" onClick={(e) => handleMenuOpen(e, setAnchorElFurnitureType)}>Furniture Type</Button>
        <Menu
          anchorEl={anchorElFurnitureType}
          keepMounted
          open={Boolean(anchorElFurnitureType)}
          onClose={() => handleMenuClose(setAnchorElFurnitureType)}
        >
          <MenuItem onClick={() => handleFilter({ furnitureType: 'table' })}>Table</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'sofa' })}>Sofa</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'chair' })}>Chair</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'bed' })}>Bed</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'desk' })}>Desk</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'dressing table' })}>Dressing Table</MenuItem>
          <MenuItem onClick={() => handleFilter({ furnitureType: 'crib' })}>Crib</MenuItem>
        </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ProductsNavbar;