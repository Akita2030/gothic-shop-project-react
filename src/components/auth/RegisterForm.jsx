import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const register = useAuthStore(state => state.register);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    register(formData);
    navigate('/');
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-fraktur text-center mb-8 text-crimson-500">Join the Darkness</h2>
      <form onSubmit={handleSubmit} className="card-gothic p-8 space-y-6">
        <div>
          <label className="block text-gothic-100 mb-2 uppercase tracking-wider text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-gothic"
            required
          />
        </div>
        
        <div>
          <label className="block text-gothic-100 mb-2 uppercase tracking-wider text-sm">Email</label>
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
          <label className="block text-gothic-100 mb-2 uppercase tracking-wider text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-gothic"
            required
          />
        </div>
        
        <div>
          <label className="block text-gothic-100 mb-2 uppercase tracking-wider text-sm">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input-gothic"
            required
          />
        </div>
        
        <button type="submit" className="btn-gothic w-full">
          Embrace the Gothic
        </button>
      </form>
    </div>
  );
};