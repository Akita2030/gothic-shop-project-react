import React from 'react';
import { CategoryButton } from './CategoryButton';

export const categories = [
  { id: 'all', name: 'All', icon: '✧' },
  { id: 'dresses', name: 'Dresses', icon: '❦' },
  { id: 'tops', name: 'Tops', icon: '❧' },
  { id: 'accessories', name: 'Accessories', icon: '✤' },
  { id: 'shoes', name: 'Shoes', icon: '✥' }
];

export const CategoryList = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(category => (
          <CategoryButton
            key={category.id}
            category={category}
            isSelected={selectedCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          />
        ))}
      </div>
    </div>
  );
};