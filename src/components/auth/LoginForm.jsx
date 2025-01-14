import React, { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const login = useAuthStore(state => state.login);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-4xl font-fraktur text-center mb-8 text-crimson-500">Login</h2>
      <form onSubmit={handleSubmit} className="card-gothic p-8 space-y-6">
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
        
        <button type="submit" className="btn-gothic w-full">
          Enter the Darkness
        </button>
      </form>
    </div>
  );
};