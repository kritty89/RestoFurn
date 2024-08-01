import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@mui/material';
import '../css/Cart.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const location = useLocation();
  const { user } = location.state || { user: null };
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cart, user } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.coverImage} alt={product.furnitureName} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{product.furnitureName}</h2>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <Button variant="outlined" onClick={() => handleRemove(product.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total Price: ${calculateTotalPrice()}</h2>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
