import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/App.css';
import '../css/Login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="login-title">
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
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
            className="login-input"
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
            className="login-input"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit" fullWidth className="login-button">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;