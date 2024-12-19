import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  
  return (
    <div className="card-gothic group transition-transform hover:-translate-y-1">
      <div 
        className="relative cursor-pointer aspect-square overflow-hidden"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gothic-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-4">
        <h3 
          className="text-lg font-gothic text-crimson-500 mb-2 cursor-pointer hover:text-crimson-600 truncate"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="text-gothic-200 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-fraktur text-gothic-100">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="btn-gothic text-xs px-4 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};