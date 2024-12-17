import React from 'react';

export const ProductFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'tops', name: 'Tops' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'shoes', name: 'Shoes' }
  ];
  
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 border-2 transition duration-300 uppercase tracking-wider text-sm
            ${selectedCategory === category.id
              ? 'border-crimson-500 text-crimson-500'
              : 'border-gothic-200/20 text-gothic-200 hover:border-gothic-200/50'
            }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};