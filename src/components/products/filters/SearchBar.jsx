import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search through the darkness..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-2 pl-10 pr-8 bg-transparent border-b-2 border-gothic-200/20 
                   text-gothic-200 placeholder-gothic-200/50 focus:outline-none
                   focus:border-crimson-500 hover:border-crimson-500 transition-colors"
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-crimson-500/50" />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <span className="text-crimson-500/50 text-sm">✧</span>
      </div>
    </div>
  );
};