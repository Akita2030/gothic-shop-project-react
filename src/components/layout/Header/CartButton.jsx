import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../store/cartStore';

export const CartButton = () => {
  const cartItems = useCartStore(state => state.items);
  
  return (
    <Link to="/cart" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
      Cart ({cartItems.length})
    </Link>
  );
};