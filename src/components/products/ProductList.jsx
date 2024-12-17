import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';
import { SearchBar } from './SearchBar';
import { products } from '../../data/products';

export const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-fraktur text-center text-crimson-500 mb-12">
        Gothic Collection
      </h1>
      
      <div className="max-w-2xl mx-auto mb-12 space-y-6">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <ProductFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gothic-200">No items found in the darkness...</p>
        </div>
      )}
    </div>
  );
};