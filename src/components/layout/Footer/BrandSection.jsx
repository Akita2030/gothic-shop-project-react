import React from 'react';
import { Link } from 'react-router-dom';

export const BrandSection = () => {
  return (
    <div className="space-y-3">
      <Link to="/" className="text-2xl font-fraktur text-crimson-500 block">
        Victorian Gothic
      </Link>
      <p className="text-gothic-200 text-sm italic">
        "Embrace the darkness with our curated collection"
      </p>
    </div>
  );
};