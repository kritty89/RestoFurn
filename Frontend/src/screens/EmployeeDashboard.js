import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function EmployeeDashboard() {
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products'); // Adjust the API endpoint as necessary
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', formData); // Adjust the API endpoint as necessary
      fetchProducts();
      setFormData({ name: '', price: '', description: '' });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`); // Adjust the API endpoint as necessary
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setValue(0); // Switch to the Add Product tab for editing
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="employee dashboard tabs">
          <Tab label="Add Product" />
          <Tab label="Manage Products" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form onSubmit={handleFormSubmit}>
          <TextField
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            {formData.id ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditProduct(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteProduct(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabPanel>
    </Box>
  );
}