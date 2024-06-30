import React, { useState } from 'react';
import CartSummary from './CartSummary';

const CheckoutSummary = () => {
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [shippingStatus, setShippingStatus] = useState('standard');

  const items = [
    {
      name: "MoFiz Women's Sports Capri Pant Cargo Hiking Pants",
      price: 37.99,
    },
    {
      name: "LNX Womens Linen Pants High Waisted Wide Leg",
      price: 29.98,
    },
    {
      name: "Dokotoo Cargo Pants Wide Leg Dress Pants Women Slacks",
      price: 39.99,
    }
  ];

  const gstRate = 0.05;
  const hstRate = 0.13;
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const gst = subtotal * gstRate;
  const hst = subtotal * hstRate;
  const total = subtotal + gst + hst;

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingStatusChange = (e) => {
    setShippingStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    console.log('Shipping Status:', shippingStatus);
    console.log('Total Amount:', total);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <h2>Shipping Address</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>ZIP Code:</label>
          <input
            type="text"
            name="zip"
            value={address.zip}
            onChange={handleAddressChange}
            required
          />
        </div>

        <h2>Payment Method</h2>
        <div>
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={handlePaymentMethodChange}
            />
            Credit Card
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentMethodChange}
            />
            PayPal
          </label>
        </div>

        <h2>Shipping Status</h2>
        <div>
          <label>
            <input
              type="radio"
              value="standard"
              checked={shippingStatus === 'standard'}
              onChange={handleShippingStatusChange}
            />
            Standard Shipping
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="express"
              checked={shippingStatus === 'express'}
              onChange={handleShippingStatusChange}
            />
            Express Shipping
          </label>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>GST: ${gst.toFixed(2)}</p>
          <p>HST: ${hst.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutSummary;