import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutSummary from '../components/CheckoutSummary.js';
import '../css/Checkout.css';

const Checkout = () => (
  <div>
    <CheckoutSummary />
  </div>
);

ReactDOM.render(<Checkout />, document.getElementById('root'));

export default Checkout;