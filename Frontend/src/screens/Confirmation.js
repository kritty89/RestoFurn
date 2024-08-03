import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import '../css/Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { cart, shippingInfo, user, totalAmount } = location.state || {
    cart: [],
    shippingInfo: {},
    user: null,
    totalAmount: 0,
  };

  return (
    <Container className="confirmation-page">
      <Box className="confirmation-header">
        <Typography variant="h4" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your order has been successfully placed.
        </Typography>
      </Box>
      <Box className="order-details">
        <Typography variant="h5" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Name:</strong> {shippingInfo.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Address:</strong> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.zip}, ${shippingInfo.country}`}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {user ? user.email : 'N/A'}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Total Amount:</strong> ${totalAmount}
        </Typography>
      </Box>
      <Box className="order-summary">
        <Typography variant="h5" gutterBottom>
          Items Purchased
        </Typography>
        {cart.map((product, index) => (
          <Box key={index} className="order-item">
            <img src={product.coverImage} alt={product.furnitureName} className="order-item-image" />
            <Box className="order-item-details">
              <Typography variant="body1"><strong>{product.furnitureName}</strong></Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="body1"><strong>Price:</strong> ${product.price.toFixed(2)}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="confirmation-footer">
        <Button variant="contained" color="primary" component={Link} to="/">
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default Confirmation;
