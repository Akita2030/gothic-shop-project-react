import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Collection', path: '/products' },
  { name: 'Shopping Cart', path: '/cart' },
  { name: 'Account', path: '/profile' }
];

export const QuickLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="text-gothic-200 hover:text-crimson-500 transition text-sm flex items-center gap-2"
        >
          <span className="text-crimson-500 text-xs">❧</span>
          {link.name}
        </Link>
      ))}
    </div>
  );
};