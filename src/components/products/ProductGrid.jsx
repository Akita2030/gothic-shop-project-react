import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gothic-200">No items found in the darkness...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};