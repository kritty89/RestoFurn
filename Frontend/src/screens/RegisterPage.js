import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import '../css/RegisterPage.css';
import apiService from '../components/apiService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await apiService.donate({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="register-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="register-title">
          Register
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
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