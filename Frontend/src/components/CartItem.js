import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Material: {item.material}</p>
        <p>Size: {item.size}</p>
        <div class="product-actions">
          <p>Price: ${item.price.toFixed(2)}</p>
          <a className='delete-style' onClick={removeFromCart}>Delete</a>
        </div>
        </div>
      </div>
    
  );
};

export default CartItem;