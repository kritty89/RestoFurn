import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/lab';
import { furnitureTypes } from '../data/FurnitureTypes';
import '../css/Donation.css';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    pickupDate: null,
    timeSlot: null,
    description: '',
    furnitureName: '',
    furnitureType: '',
    images: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, pickupDate: date });
  };

  const handleTimeChange = (time) => {
    setFormData({ ...formData, timeSlot: time });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <Container className="container">
      <Box className="form-box">
        <Typography variant="h4" gutterBottom className="form-title">
          Donation Request Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            required
            className="form-input"
          />
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            variant="outlined"
            required
            className="form-input"
          />
          <TextField
            fullWidth
            label="Contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            variant="outlined"
            required
            className="form-input"
          />
          <DatePicker
            label="Pickup Date"
            value={formData.pickupDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} fullWidth variant="outlined" required className="form-input" />}
          />
          <TimePicker
            label="Time Slot"
            value={formData.timeSlot}
            onChange={handleTimeChange}
            renderInput={(params) => <TextField {...params} fullWidth variant="outlined" required className="form-input" />}
          />
          <TextField
            fullWidth
            label="Furniture Name"
            name="furnitureName"
            value={formData.furnitureName}
            onChange={handleChange}
            variant="outlined"
            required
            className="form-input"
          />
          <TextField
            fullWidth
            select
            label="Furniture Type"
            name="furnitureType"
            value={formData.furnitureType}
            onChange={handleChange}
            variant="outlined"
            required
            className="form-input"
          >
            {furnitureTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            required
            className="form-input"
          />
          <Button
            variant="contained"
            component="label"
            className="upload-button"
          >
            Upload Images
            <input
              type="file"
              hidden
              multiple
              onChange={handleFileChange}
            />
          </Button>
          <Box className="form-button">
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Request Pickup
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Donation;