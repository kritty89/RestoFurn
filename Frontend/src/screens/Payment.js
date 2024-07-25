import React, { useState, useEffect, useCallback } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Payment.css';
import apiService from '../components/apiService';

const stripePromise = loadStripe('pk_test_51PfVMmRrfzZH74Qfoz5UH6b8z4pbI3eIblaOniPdhmpvNGY4ljFHGCmFeq2a6W6WNuouV1uypvOizsZOeJYzfWDL00wJA4V0pN');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const calculateTotalPrice = useCallback(() => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  }, [cart]);

  const createPaymentIntent = useCallback(async () => {
    try {
      const response = await apiService.processPayment('/create-payment-intent', {
        amount: calculateTotalPrice() * 100,
      });
      setClientSecret(response.data.clientSecret);
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  }, [calculateTotalPrice]);

  useEffect(() => {
    createPaymentIntent();
  }, [createPaymentIntent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      navigate('/confirmation');
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="card-element" />
      <button disabled={processing || succeeded} id="submit">
        <span id="button-text">
          {processing ? 'Processing...' : 'Pay now'}
        </span>
      </button>
      {error && <div className="card-error" role="alert">{error}</div>}
      {succeeded && <p className="result-message">Payment succeeded!</p>}
    </form>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
