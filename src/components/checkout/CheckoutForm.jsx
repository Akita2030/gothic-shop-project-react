import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the order submission
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-fraktur text-crimson-500 mb-4">Your Cart is Empty</h2>
        <button 
          onClick={() => navigate('/products')}
          className="btn-gothic mt-4"
        >
          Return to Collection
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-fraktur text-crimson-500 mb-8 text-center">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-gothic text-gothic-100 mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gothic-200 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-gothic"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gothic-200 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-gothic"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gothic-200 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-gothic"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gothic-200 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input-gothic"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gothic-200 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="input-gothic"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gothic-200 mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="input-gothic"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gothic-200 mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-gothic"
                  required
                />
              </div>
              
              <button type="submit" className="btn-gothic w-full">
                Complete Order
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-gothic text-gothic-100 mb-6">Order Summary</h2>
            <div className="card-gothic p-6">
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-gothic-200">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-gothic-100">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gothic-200/10 pt-4 mt-4">
                  <div className="flex justify-between text-lg font-gothic">
                    <span className="text-gothic-100">Total</span>
                    <span className="text-crimson-500">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};