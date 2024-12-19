import React from 'react';
import { Link } from 'react-router-dom';

const BrandSection = () => (
  <div className="space-y-3">
    <Link to="/" className="text-2xl font-fraktur text-crimson-500 block">
      Victorian Gothic
    </Link>
    <p className="text-gothic-200 text-sm italic">
      "Embrace the darkness with our curated collection"
    </p>
  </div>
);

const QuickLinks = () => {
  const links = [
    { name: 'Collection', path: '/products' },
    { name: 'Shopping Cart', path: '/cart' },
    { name: 'Account', path: '/profile' }
  ];

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

const Newsletter = () => (
  <div className="space-y-3">
    <h3 className="text-sm uppercase tracking-wider text-gothic-200">Newsletter</h3>
    <div className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 input-gothic text-sm py-1.5"
      />
      <button className="btn-gothic py-1.5 px-4 text-sm">
        Join
      </button>
    </div>
  </div>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gothic-200/10 bg-gothic-800/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BrandSection />
          <QuickLinks />
          <Newsletter />
        </div>

        <div className="mt-8 pt-4 text-center border-t border-gothic-200/10">
          <p className="text-gothic-200 text-sm">
            © {currentYear} Victorian Gothic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};