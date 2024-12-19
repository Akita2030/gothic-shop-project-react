import React from 'react';
import { BrandSection } from './BrandSection';
import { QuickLinks } from './QuickLinks';
import { Newsletter } from './Newsletter';

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