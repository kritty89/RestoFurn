import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductsNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState({ material: null, price: null, furnitureType: null });
  const navigate = useNavigate();

  const handleMenuOpen = (event, menuType) => {
    setAnchorEl((prev) => ({ ...prev, [menuType]: event.currentTarget }));
  };

  const handleMenuClose = (menuType) => {
    setAnchorEl((prev) => ({ ...prev, [menuType]: null }));
  };

  const handleFilter = (filter) => {
    const queryParams = new URLSearchParams(filter).toString();
    navigate(`/products?${queryParams}`);
    setAnchorEl({ material: null, price: null, furnitureType: null });
  };

  const menuItems = {
    price: [
      { label: 'Under $50', filter: { minPrice: 0, maxPrice: 50 } },
      { label: '$50 - $75', filter: { minPrice: 50, maxPrice: 75 } },
      { label: '$75 - $100', filter: { minPrice: 75, maxPrice: 100 } },
      { label: '$100 & Above', filter: { minPrice: 100 } },
    ],
    material: [
      { label: 'Wood', filter: { material: 'wood' } },
      { label: 'Steel', filter: { material: 'steel' } },
      { label: 'Plastic', filter: { material: 'plastic' } },
      { label: 'Fabric', filter: { material: 'fabric' } },
    ],
    furnitureType: [
      { label: 'Table', filter: { furnitureType: 'table' } },
      { label: 'Sofa', filter: { furnitureType: 'sofa' } },
      { label: 'Chair', filter: { furnitureType: 'chair' } },
      { label: 'Bed', filter: { furnitureType: 'bed' } },
      { label: 'Desk', filter: { furnitureType: 'desk' } },
      { label: 'Dressing Table', filter: { furnitureType: 'dressing table' } },
      { label: 'Crib', filter: { furnitureType: 'crib' } },
    ],
  };

  const renderMenuItems = (items, menuType) => {
    return items.map((item) => (
      <MenuItem key={item.label} onClick={() => handleFilter(item.filter)}>
        {item.label}
      </MenuItem>
    ));
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Shop By
        </Typography>
        <Box display="flex">
          <Button color="inherit" onClick={() => navigate('/products')}>All Products</Button>
          {Object.keys(menuItems).map((menuType) => (
            <React.Fragment key={menuType}>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, menuType)}
              >
                {menuType.charAt(0).toUpperCase() + menuType.slice(1)}
              </Button>
              <Menu
                anchorEl={anchorEl[menuType]}
                keepMounted
                open={Boolean(anchorEl[menuType])}
                onClose={() => handleMenuClose(menuType)}
              >
                {renderMenuItems(menuItems[menuType], menuType)}
              </Menu>
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ProductsNavbar;
