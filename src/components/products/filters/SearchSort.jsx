import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductSort } from './ProductSort';

export const SearchSort = ({ searchQuery, onSearchChange, sortOrder, onSortChange }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="w-80">
        <SearchBar 
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>
      <ProductSort
        sortOrder={sortOrder}
        onSortChange={onSortChange}
      />
    </div>
  );
};