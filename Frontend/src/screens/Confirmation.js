
import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/Confirmation.css';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const handleBackToProducts = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <Typography variant="h4" gutterBottom>Thank You!</Typography>
      <Typography variant="h6">Your order has been placed successfully.</Typography>
      <Button variant="contained" color="primary" onClick={handleBackToProducts}>
        Back to Products
      </Button>
    </div>
  );
};

export default ConfirmationPage;
