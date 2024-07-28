import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import '../css/Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const calculateTax = () => {
    return (calculateTotalPrice() * 0.13).toFixed(2);
  };

  const calculateFinalAmount = () => {
    return (parseFloat(calculateTotalPrice()) + parseFloat(calculateTax())).toFixed(2);
  };

  const handlePayment = () => {
    navigate('/payment', { state: { cart } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="checkout-item">
              <img src={product.coverImage} alt={product.furnitureName} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h2>{product.furnitureName}</h2>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h2>Total Price: ${calculateTotalPrice()}</h2>
            <h2>Tax: ${calculateTax()}</h2>
            <h2>Amount to Pay: ${calculateFinalAmount()}</h2>
            <Button variant="contained" color="primary" onClick={handlePayment}>
              Proceed to Payment
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
