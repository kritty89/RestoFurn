import React from 'react';

const CartSummary = ({ subtotal }) => {
  return (
    <div className="cart-summary">
      <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;