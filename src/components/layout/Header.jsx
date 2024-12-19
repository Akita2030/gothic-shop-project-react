import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';
import { IMAGES } from '../../assets/images';

const ProfileMenu = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  
  if (!isAuthenticated) return null;
  
  return (
    <div className="relative group">
      <button className="flex items-center gap-2">
        <UserCircleIcon className="w-6 h-6 text-gothic-100" />
        <span className="text-gothic-100">{user?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-gothic-800 border border-gothic-200/10 
                    shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    divide-y divide-gothic-200/10">
        <Link
          to="/profile"
          className="block px-4 py-2 text-gothic-100 hover:bg-gothic-700 transition"
        >
          Profile
        </Link>
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-left text-gothic-100 hover:bg-gothic-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const CartButton = () => {
  const cartItems = useCartStore(state => state.items);
  
  return (
    <Link to="/cart" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
      Cart ({cartItems.length})
    </Link>
  );
};

const AuthButtons = () => (
  <>
    <Link to="/login" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
      Login
    </Link>
    <Link to="/register" className="btn-gothic">
      Register
    </Link>
  </>
);

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuthStore();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    border-b border-gothic-200/10 backdrop-blur-lg
                    ${isScrolled ? 'bg-gothic-900/95' : 'bg-gothic-900/50'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img src={IMAGES.logo} alt="Victorian Gothic" className="h-12 w-auto" />
            <span className="text-3xl font-fraktur text-crimson-500 hover:text-crimson-600 transition">
              Victorian Gothic
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/products" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
              Collection
            </Link>
            
            <CartButton />
            <ProfileMenu />
            
            {!isAuthenticated && <AuthButtons />}
          </div>
        </div>
      </div>
    </nav>
  );
};