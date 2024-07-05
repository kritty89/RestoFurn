import React, { useState } from 'react';
import apiService from '../components/apiService';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import '../css/App.css';
import '../css/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await apiService.login(email, password);
      console.log('Login Successful:', userData);
      navigate('/productsHome');
    } catch (error) {
      console.error('Login Failed:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="login-title">
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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