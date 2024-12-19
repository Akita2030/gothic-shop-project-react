import React from 'react';
import { SearchSort } from './filters/SearchSort';
import { CategoryList } from './filters/CategoryList';

export const ProductFilters = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortOrder,
  onSortChange
}) => {
  return (
    <div className="mb-12 space-y-8">
      <SearchSort 
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        sortOrder={sortOrder}
        onSortChange={onSortChange}
      />
      <CategoryList 
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};