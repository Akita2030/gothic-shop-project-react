import React from 'react';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search through the darkness..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-gothic pl-12"
      />
      <svg
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gothic-200/50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};