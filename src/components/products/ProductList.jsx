import React, { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import { ProductFilters } from './ProductFilters';
import { SideContent } from './SideContent';
import { products } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { useToast } from '../../hooks/useToast';
import { Toast } from '../ui/Toast';

export const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('');
  const addToCart = useCartStore(state => state.addToCart);
  const { toast, showToast, hideToast } = useToast();
  
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(product => 
      selectedCategory === 'all' || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
    
  const handleAddToCart = (product) => {
    addToCart(product);
    showToast('Item added to your collection');
  };
  
  return (
    <div>
      <h1 className="text-4xl font-fraktur text-center text-crimson-500 mb-12">
        Gothic Collection
      </h1>
      
      {/* Filters Section */}
      <div className="mb-12">
        <ProductFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <ProductGrid 
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </div>

        {/* Side Content */}
        <div className="lg:w-80">
          <SideContent />
        </div>
      </div>
      
      {toast.show && <Toast message={toast.message} onClose={hideToast} />}
    </div>
  );
};