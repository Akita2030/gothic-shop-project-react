import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ProductList } from './components/products/ProductList';
import { ProductDetail } from './components/products/ProductDetail';
import { Cart } from './components/cart/Cart';
import { CheckoutForm } from './components/checkout/CheckoutForm';
import { OrderConfirmation } from './components/checkout/OrderConfirmation';
import { Profile } from './components/profile/Profile';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gothic-900 text-gothic-100">
        <Header />
        
        <div className="pt-20">
          <div className="container mx-auto px-6 py-12">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<ProductList />} />
            </Routes>
          </div>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}