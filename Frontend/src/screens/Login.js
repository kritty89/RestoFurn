import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Tabs, Tab } from '@mui/material';
import apiService from '../components/apiService';
import '../css/App.css';
import '../css/Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [tab, setTab] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleUserLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await apiService.login(email, password);
      console.log('User Login Successful:', user);
      navigate('/productshome', { state: { user } });
    } catch (error) {
      console.error('User Login Failed:', error);
      setError('User login failed. Please try again.');
    }
  };

  const handleEmployeeLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const employee = await apiService.employeeLogin(employeeEmail, employeePassword);
      console.log('Employee Login Successful:', employee);
      navigate('/employeedashboard', { state: { employee } });
    } catch (error) {
      console.error('Employee Login Failed:', error);
      setError('Employee login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="login-container">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom className="login-title">
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Tabs value={tab} onChange={handleTabChange} aria-label="login tabs"className='login-tabs'>
          <Tab label="User Login" />
          <Tab label="Employee Login" />
        </Tabs>
        {tab === 0 && (
          <form onSubmit={handleUserLoginSubmit} className="login-form">
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

            <Box mt={2} textAlign="center">
              <Typography variant="body2">
                Don't have an account? <Link to="/register">Register here</Link>
              </Typography>
            </Box>
          </form>

        )}
        {tab === 1 && (
          <form onSubmit={handleEmployeeLoginSubmit} className="login-form">
            <TextField
              fullWidth
              label="Employee Email"
              name="employeeEmail"
              type="email"
              value={employeeEmail}
              onChange={(e) => setEmployeeEmail(e.target.value)}
              margin="normal"
              variant="outlined"
              required
              className="login-input"
            />
            <TextField
              fullWidth
              label="Password"
              name="employeePassword"
              type="password"
              value={employeePassword}
              onChange={(e) => setEmployeePassword(e.target.value)}
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
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
