import React from 'react';
import { Quote } from './Quote';
import { FeaturedItems } from './FeaturedItems';
import { SocialLinks } from './SocialLinks';

export const SidePanel = () => {
  return (
    <aside className="w-80 space-y-8 hidden xl:block">
      <Quote />
      <FeaturedItems />
      <SocialLinks />
    </aside>
  );
};