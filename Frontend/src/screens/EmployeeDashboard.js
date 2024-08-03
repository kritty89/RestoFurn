import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import apiService from '../components/apiService';
import { useLocation } from 'react-router-dom';
import '../css/EmployeeDashboard.css';

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
  const location = useLocation();
  const { employee } = location.state || { employee: null };
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [formData, setFormData] = useState({ id: '', furnitureName: '', furnitureType: '', material: '', price: '', furnitureStatus: 'Received', inStock: 'y', coverImage: '', description: '' });
  const [donationFormData, setDonationFormData] = useState({ id: '', name: '', pickupDateTime: '', email: '', furnitureCount: '', status: 'Pending' });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchDonations();
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

  const fetchDonations = async () => {
    try {
      const response = await apiService.fetchDonations();
      setDonations(response);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDonationInputChange = (e) => {
    const { name, value } = e.target;
    setDonationFormData({ ...donationFormData, [name]: value });
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

    try {
      if (formData.id) {
        await apiService.updateProduct(formData.id, uploadData);
      } else {
        await apiService.createProduct(uploadData);
      }
      fetchProducts();
      setFormData({ id: '', furnitureName: '', furnitureType: '', material: '', price: '', furnitureStatus: 'Received', inStock: 'y', coverImage: '', description: '' });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleDonationFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (donationFormData.id) {
        await apiService.updateDonation(donationFormData.id, donationFormData);
      } else {
        await apiService.createDonation(donationFormData);
      }
      fetchDonations();
      setDonationFormData({ id: '', name: '', pickupDateTime: '', email: '', furnitureCount: '', status: 'Pending' });
    } catch (error) {
      console.error("Error submitting donation:", error);
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

  const handleDeleteDonation = async (id) => {
    try {
      await apiService.deleteDonation(id);
      fetchDonations();
    } catch (error) {
      console.error("Error deleting donation:", error);
    }
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setValue(0);
  };

  const handleEditDonation = (donation) => {
    setDonationFormData(donation);
    setValue(2);
  };

  return (
    <Box className="box">
      <AppBar position="static" className="tabs-container">
        <Tabs value={value} onChange={handleChange} aria-label="employee dashboard tabs">
          <Tab label="Add Product" />
          <Tab label="Manage Products" />
          <Tab label="Manage Donations" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="tab-panel">
        {employee && <h3>Welcome, {employee.firstName}!</h3>}
        <form onSubmit={handleFormSubmit} className="form-container">
          <TextField
            label="Furniture Name"
            name="furnitureName"
            value={formData.furnitureName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            className="text-field"
          />
          <FormControl fullWidth margin="normal" className="text-field">
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
          <FormControl fullWidth margin="normal" className="text-field">
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
            className="text-field"
          />
          <FormControl fullWidth margin="normal" className="text-field">
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="furnitureStatus"
              value={formData.furnitureStatus}
              onChange={handleInputChange}
            >
              <MenuItem value="received">Received</MenuItem>
              <MenuItem value="initial check">Initial Check</MenuItem>
              <MenuItem value="renovated">Renovated</MenuItem>
              <MenuItem value="quality check">Quality Check</MenuItem>
              <MenuItem value="ready for sale">Ready for Sale</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" className="text-field">
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
            className="text-field"
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            className="button"
          >
            Upload Image
            <input
              type="file"
              hidden
              onChange={handleFileChange}
            />
          </Button>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            className="text-field"
          />
          <Button type="submit" variant="contained" color="primary" className="button">
            {formData.id ? 'Update Product' : 'Add Product'}
          </Button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1} className="tab-panel">
        <Box className="table-container">
          <Table className="table">
            <TableHead>
              <TableRow className="table-head">
                <TableCell className="table-head-cell">Name</TableCell>
                <TableCell className="table-head-cell">Price</TableCell>
                <TableCell className="table-head-cell">Description</TableCell>
                <TableCell className="table-head-cell">In Stock</TableCell>
                <TableCell className="table-head-cell">Image</TableCell>
                <TableCell className="table-head-cell">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="table-row">
                  <TableCell className="table-cell">{product.furnitureName}</TableCell>
                  <TableCell className="table-cell">{product.price}</TableCell>
                  <TableCell className="table-cell">{product.description}</TableCell>
                  <TableCell className="table-cell">{product.inStock}</TableCell>
                  <TableCell className="table-cell">
                    <img src={product.coverImage} alt={product.furnitureName} className="table-image" />
                  </TableCell>
                  <TableCell className="table-cell">
                    <Box className="action-buttons">
                      <IconButton onClick={() => handleEditProduct(product)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteProduct(product.id)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} className="tab-panel">
        <form onSubmit={handleDonationFormSubmit} className="form-container">
          <TextField
            label="Donor Name"
            name="name"
            value={donationFormData.name}
            onChange={handleDonationInputChange}
            fullWidth
            margin="normal"
            className="text-field"
          />
          <TextField
            label="Email"
            name="email"
            value={donationFormData.email}
            onChange={handleDonationInputChange}
            fullWidth
            margin="normal"
            className="text-field"
          />
          <TextField
            label="Furniture Count"
            name="furnitureCount"
            value={donationFormData.furnitureCount}
            onChange={handleDonationInputChange}
            fullWidth
            margin="normal"
            className="text-field"
          />
          <FormControl fullWidth margin="normal" className="text-field">
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              name="status"
              value={donationFormData.status}
              onChange={handleDonationInputChange}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="received">Received</MenuItem>
              <MenuItem value="processed">Processed</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className="button">
            {donationFormData.id ? 'Update Donation' : 'Add Donation'}
          </Button>
        </form>
        <Box className="table-container">
          <Table className="table">
            <TableHead>
              <TableRow className="table-head">
                <TableCell className="table-head-cell">Donor Name</TableCell>
                <TableCell className="table-head-cell">Donation Date</TableCell>
                <TableCell className="table-head-cell">Email</TableCell>
                <TableCell className="table-head-cell">Furniture Count</TableCell>
                <TableCell className="table-head-cell">Status</TableCell>
                <TableCell className="table-head-cell">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id} className="table-row">
                  <TableCell className="table-cell">{donation.name}</TableCell>
                  <TableCell className="table-cell">{donation.pickupDateTime}</TableCell>
                  <TableCell className="table-cell">{donation.email}</TableCell>
                  <TableCell className="table-cell">{donation.furnitureCount}</TableCell>
                  <TableCell className="table-cell">{donation.status}</TableCell>
                  <TableCell className="table-cell">
                    <Box className="action-buttons">
                      <IconButton onClick={() => handleEditDonation(donation)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteDonation(donation.id)}>
                        <Delete />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TabPanel>
    </Box>
  );
}
