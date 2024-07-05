import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import apiService from '../components/apiService';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import '../css/Donation.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    pickupDateTime: new Date(),
    description: '',
    furnitureCount: '',
    images: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setFormData({ ...formData, pickupDate: date });
    setSelectedDate(date)
  };


  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.donate(formData);
      console.log('Sucessful Donation:', response);
    } catch (error) {
      console.error('Donation failed:', error);
    }
  };

  return (
    <div className='donation'>
      <div className="donation-header">
        <h2>Donation Request</h2>
      </div>
      <Container className="container">
        <div className='quote'>
          <FormatQuoteIcon size={50} />
          <Typography variant="h4" gutterBottom className="form-title">
            GIVING IS NOT JUST ABOUT MAKING A DONATION. IT IS ABOUT MAKING A DIFFERENCE.
          </Typography>
          <Typography variant="h5" gutterBottom className="form-title">
            - KATHY CALVIN
          </Typography>
        </div>
        <Box className="form-box">
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
              type="text"
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
              type="text"
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
              type="tel"
              className="form-input"
            />
            <TextField
              fullWidth
              label="Furniture Count"
              name="furnitureCount"
              value={formData.furnitureCount}
              onChange={handleChange}
              variant="outlined"
              required
              className="form-input"
            />
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                background color="white"
                label="Pickup Date Time"
                value={selectedDate}
                // required
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" required className="form-input" />}
              />
            </LocalizationProvider>
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
    </div>
  );
};

export default Donation;