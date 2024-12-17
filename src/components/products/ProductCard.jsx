import React from 'react';
import { useCartStore } from '../../store/cartStore';

export const ProductCard = ({ product }) => {
  const addToCart = useCartStore(state => state.addToCart);
  
  return (
    <div className="card-gothic overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gothic-900/80 to-transparent" />
      </div>
      
      <div className="p-6 relative">
        <h3 className="text-2xl font-gothic text-crimson-500 mb-2">{product.name}</h3>
        <p className="text-gothic-200 mb-4 italic">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-fraktur text-gothic-100">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="btn-gothic"
          >
            Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
};