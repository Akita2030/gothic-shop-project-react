import React from 'react';

export const ProductSort = ({ sortOrder, onSortChange }) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value)}
      className="input-gothic text-sm py-2 px-4 appearance-none cursor-pointer"
    >
      <option value="">Sort by Price</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
};