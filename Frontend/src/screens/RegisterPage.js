import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import '../css/RegisterPage.css';
import apiService from '../components/apiService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: '',
    postalCode: '',
    streetAddress: '',
    country: '',
    state: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setSuccess('');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Invalid email address');
      setSuccess('');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Invalid phone number. It should contain 10 digits.');
      setSuccess('');
      return;
    }

    try {
      const response = await apiService.register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        city: formData.city,
        postalCode: formData.postalCode,
        streetAddress: formData.streetAddress,
        country: formData.country,
        state: formData.state,
      });
      console.log(response.data);
      setSuccess('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="sm" className="register-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="register-title">
          Register
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {success && <Typography color="primary">{success}</Typography>}
        <form onSubmit={handleSubmit} className="register-form">
          <TextField
            variant="outlined"
            required
            fullWidth
            name="firstName"
            label="First Name"
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="email"
            label="Email address"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="phone"
            label="Phone Number"
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="streetAddress"
            label="Street Address"
            type="text"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="city"
            label="City"
            type="text"
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="postalCode"
            label="Postal Code"
            type="text"
            id="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="state"
            label="State"
            type="text"
            id="state"
            value={formData.state}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="country"
            label="Country"
            type="text"
            id="country"
            value={formData.country}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth className="register-button">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
