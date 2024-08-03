import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import apiService from '../components/apiService';
import '../css/Donation.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Donation = () => {
  const location = useLocation();
  const { user } = location.state || { user: null };

  const [formData, setFormData] = useState({
    name: user ? user.firstName : '',
    streetAddress: user ? user.streetAddress : '',
    city: user ? user.city : '',
    postalCode: user ? user.postalCode : '',
    state: user ? user.state : '',
    country: user ? user.country : '',
    phone: user ? user.phone : '',
    email: user ? user.email : '',
    pickupDateTime: new Date(),
    description: '',
    furnitureCount: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.firstName + ' ' + user.lastName,
        streetAddress: user.streetAddress,
        city: user.city,
        postalCode: user.postalCode,
        state: user.state,
        country: user.country,
        phone: user.phone,
        email: user.email,
        pickupDateTime: new Date(),
        description: '',
        furnitureCount: '',
      });
    }
  }, [user]);

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.streetAddress) newErrors.streetAddress = 'Street Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';
    if (!formData.phone) {
      newErrors.phone = 'Contact is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number. Must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email Id is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.furnitureCount) newErrors.furnitureCount = 'Furniture Count is required';
    if (!formData.description) newErrors.description = 'Description is required';

    const now = new Date();
    if (formData.pickupDateTime <= now) newErrors.pickupDateTime = 'Pickup Date must be in the future';
    const pickupHour = formData.pickupDateTime.getHours();
    if (pickupHour < 8 || pickupHour > 17) newErrors.pickupDateTime = 'Pickup time must be between 8 AM and 5 PM';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, pickupDateTime: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await apiService.donate(formData);
      console.log('Successful Donation:', response);
      setOpen(true);
    } catch (error) {
      console.error('Donation failed:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
              error={!!errors.name}
              helperText={errors.name}
              className="form-input"
            />
            <TextField
              fullWidth
              label="Street Address"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.streetAddress}
              helperText={errors.streetAddress}
              className="form-input"
            />
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.city}
              helperText={errors.city}
              className="form-input"
            />
            <TextField
              fullWidth
              label="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              className="form-input"
            />
            <TextField
              fullWidth
              label="Province"
              name="state"
              value={formData.state}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.state}
              helperText={errors.state}
              className="form-input"
            />
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.country}
              helperText={errors.country}
              className="form-input"
            />
            <TextField
              fullWidth
              label="Contact"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.phone}
              helperText={errors.phone}
              type="tel"
              className="form-input"
            />
            <TextField
              fullWidth
              label="Email Id"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
              error={!!errors.email}
              helperText={errors.email}
              type="email"
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
              error={!!errors.furnitureCount}
              helperText={errors.furnitureCount}
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
              error={!!errors.description}
              helperText={errors.description}
              className="form-input"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Pickup Date Time"
                value={formData.pickupDateTime}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" required className="form-input" />}
                minDate={new Date()}
                minTime={new Date().setHours(8, 0)}
                maxTime={new Date().setHours(17, 0)}
                ampm={false}  // 24-hour format
              />
            </LocalizationProvider>
            <Box className="form-button">
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Request Pickup
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Donation Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your donation! Your request has been successfully submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Donation;
