import React from 'react';

export const ProductSort = ({ sortOrder, onSortChange }) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value)}
      className="text-sm py-2 px-4 appearance-none cursor-pointer w-32 bg-transparent text-gothic-200 
                 border-b-2 border-gothic-200/20 hover:border-crimson-500 focus:border-crimson-500 
                 focus:outline-none transition-colors"
    >
      <option value="">Sort by Price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
};