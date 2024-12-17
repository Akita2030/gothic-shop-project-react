import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { ProductList } from './components/products/ProductList';
import { Cart } from './components/cart/Cart';
import { useAuthStore } from './store/authStore';
import { useCartStore } from './store/cartStore';

function App() {
  const { isAuthenticated, logout } = useAuthStore();
  const cartItems = useCartStore(state => state.items);
  
  return (
    <Router>
      <div className="min-h-screen bg-gothic-900 text-gothic-100">
        <nav className="border-b border-gothic-200/10 bg-gothic-800/50 backdrop-blur-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-3xl font-fraktur text-crimson-500 hover:text-crimson-600 transition">
                Victorian Gothic
              </Link>
              
              <div className="flex items-center gap-8">
                <Link to="/products" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
                  Collection
                </Link>
                
                <Link to="/cart" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
                  Cart ({cartItems.length})
                </Link>
                
                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link to="/login" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
                      Login
                    </Link>
                    <Link to="/register" className="btn-gothic">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </main>
        
        <footer className="border-t border-gothic-200/10 bg-gothic-800/50">
          <div className="container mx-auto px-6 py-8 text-center">
            <p className="font-gothic text-gothic-200">
              © {new Date().getFullYear()} Victorian Gothic. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;