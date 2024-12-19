import React from 'react';
import { Quote } from '../layout/SidePanel/Quote';
import { FeaturedItems } from '../layout/SidePanel/FeaturedItems';
import { SocialLinks } from '../layout/SidePanel/SocialLinks';

export const SideContent = () => {
  return (
    <div className="space-y-8">
      <Quote />
      <FeaturedItems />
      <SocialLinks />
    </div>
  );
};