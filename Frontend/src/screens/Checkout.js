import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import '../css/Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { cart, user } = location.state || { cart: [], user: null };
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  useEffect(() => {
    if (user) {
      setShippingInfo({
        name: `${user.firstName} ${user.lastName}`,
        address: user.streetAddress,
        city: user.city,
        state: user.state,
        zip: user.postalCode,
        country: user.country,
      });
    }
  }, [user]);

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
    navigate('/payment', { state: { cart, shippingInfo, user } });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="checkout-container">
          <div className="checkout-info">
            <div className="shipping-info">
              <h2>Shipping Address</h2>
              <TextField
                label="Name"
                name="name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Address"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="City"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="State"
                name="state"
                value={shippingInfo.state}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="ZIP Code"
                name="zip"
                value={shippingInfo.zip}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Country"
                name="country"
                value={shippingInfo.country}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
            </div>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            {cart.map((product) => (
              <div key={product.id} className="checkout-item">
                <img src={product.coverImage} alt={product.furnitureName} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <h3>{product.furnitureName}</h3>
                  <p>{product.description}</p>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
            <div className="checkout-total">
              <h2>Total Price: ${calculateTotalPrice()}</h2>
              <h2>Tax: ${calculateTax()}</h2>
              <h2>Amount to Pay: ${calculateFinalAmount()}</h2>
            </div>
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
