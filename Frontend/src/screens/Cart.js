import React, { useState } from 'react';
import CartItem from '../components/CartItem.js'
import CartSummary from '../components/CartSummary.js';
import '../css/Cart.css';


function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Sofa", price: 37.99, material: 'Cotton', size: 'Large', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Door', price: 29.98, material: 'wooden', size: 'Large', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Bed', price: 39.99, material: 'Wooden', size: 'Large', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Chair', price: 39.99, material: 'Plastic', size: 'Medium', image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Mirror', price: 39.99, material: 'Glass', size: 'Small', image: 'https://via.placeholder.com/100' },
  ]);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price,0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} removeFromCart={() => removeFromCart(index)} />
          ))}
        </div>
        <div className="cart-summary-container">
          <CartSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
