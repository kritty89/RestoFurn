import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import apiService from '../components/apiService';

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
  const [formData, setFormData] = useState({ id: '', furnitureName: '', furnitureType: '', material: '', price: '', furnitureStatus: 'Received', inStock: 'y', coverImage: '', description: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchProducts = async () => {
    try {
      const response = await apiService.fetchProducts();
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const uploadData = new FormData();
    uploadData.append('product', JSON.stringify({
      furnitureName: formData.furnitureName,
      furnitureType: formData.furnitureType,
      material: formData.material,
      price: formData.price,
      furnitureStatus: formData.furnitureStatus,
      inStock: formData.inStock,
      coverImage: formData.coverImage,
      description: formData.description
    }));
    
    if (selectedFile) {
      uploadData.append('imageFile', selectedFile);
    }
  
    // Log FormData contents for debugging
    console.log("FormData contents:");
    for (let [key, value] of uploadData.entries()) {
      console.log(key, value);
    }
  
    try {
      if (formData.id) {
        console.log("Updating product with ID:", formData.id);
        await apiService.updateProduct(formData.id, uploadData);
      } else {
        console.log("Creating new product");
        await apiService.createProduct(uploadData);
      }
      fetchProducts();
      setFormData({ id: '', furnitureName: '', furnitureType: '', material: '', price: '', furnitureStatus: 'Received', inStock: 'y', coverImage: '', description: '' });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await apiService.deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setValue(0);
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
            label="Furniture Name"
            name="furnitureName"
            value={formData.furnitureName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Furniture Type</InputLabel>
            <Select
              label="Furniture Type"
              name="furnitureType"
              value={formData.furnitureType}
              onChange={handleInputChange}
            >
              <MenuItem value="chair">Chair</MenuItem>
              <MenuItem value="table">Table</MenuItem>
              <MenuItem value="sofa">Sofa</MenuItem>
              <MenuItem value="bed">Bed</MenuItem>
              <MenuItem value="desk">Desk</MenuItem>
              <MenuItem value="dressing table">Dressing Table</MenuItem>
              <MenuItem value="crib">Crib</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Material</InputLabel>
            <Select
              label="Material"
              name="material"
              value={formData.material}
              onChange={handleInputChange}
            >
              <MenuItem value="wood">Wood</MenuItem>
              <MenuItem value="steel">Steel</MenuItem>
              <MenuItem value="plastic">Plastic</MenuItem>
              <MenuItem value="fabric">Fabric</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="furnitureStatus"
              value={formData.furnitureStatus}
              onChange={handleInputChange}
            >
              <MenuItem value="recieved">Received</MenuItem>
              <MenuItem value="initial check">Initial Check</MenuItem>
              <MenuItem value="renovated">Renovated</MenuItem>
              <MenuItem value="quality check">Quality Check</MenuItem>
              <MenuItem value="ready for sale">Ready for Sale</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>In Stock</InputLabel>
            <Select
              label="In Stock"
              name="inStock"
              value={formData.inStock}
              onChange={handleInputChange}
            >
              <MenuItem value="y">Yes</MenuItem>
              <MenuItem value="n">No</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Cover Image"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            margin="normal"
          >
            Upload Image
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
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
              <TableCell>In Stock</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.furnitureName}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.inStock}</TableCell>
                <TableCell>
                  <img src={product.coverImage} alt={product.furnitureName} width="100" />
                </TableCell>
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
