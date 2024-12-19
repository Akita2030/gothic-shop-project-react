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
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="input-gothic text-sm py-2 px-4 appearance-none cursor-pointer"
    >
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};