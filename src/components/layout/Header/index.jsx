import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';
import { CartButton } from './CartButton';
import { AuthButtons } from './AuthButtons';
import { useAuthStore } from '../../../store/authStore';

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
          <Link to="/" className="text-3xl font-fraktur text-crimson-500 hover:text-crimson-600 transition">
            Victorian Gothic
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