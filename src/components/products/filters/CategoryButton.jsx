import React from 'react';

export const CategoryButton = ({ category, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 border-2 transition-all duration-300 ${
        isSelected
          ? 'border-crimson-500 text-crimson-500 bg-crimson-500/5'
          : 'border-gothic-200/20 text-gothic-200 hover:border-crimson-500 hover:text-crimson-500'
      }`}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg">{category.icon}</span>
        <span className="uppercase tracking-wider text-sm">{category.name}</span>
      </span>
    </button>
  );
};