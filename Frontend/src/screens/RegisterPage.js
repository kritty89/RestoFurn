import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import '../css/RegisterPage.css';
import apiService from '../components/apiService';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ fname: '', lname: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.donate(formData);
      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" className="register-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="register-title">
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="register-form">
          <TextField
            fullWidth
            label="First Name"
            name="firstname"
            value={formData.fname}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            className="register-input"
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastname"
            value={formData.lname}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            className="register-input"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            className="register-input"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            className="register-input"
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