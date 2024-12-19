import React from 'react';
import { useNavigate } from 'react-router-dom';

export const OrderConfirmation = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-fraktur text-crimson-500 mb-6">Order Confirmed</h1>
      <p className="text-gothic-200 mb-8">
        Thank you for your order. Your dark treasures will soon be yours.
      </p>
      <button 
        onClick={() => navigate('/products')}
        className="btn-gothic"
      >
        Continue Shopping
      </button>
    </div>
  );
};