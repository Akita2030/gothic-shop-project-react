import React from 'react';

const socialLinks = [
  { name: 'Instagram', icon: '✧', url: '#' },
  { name: 'Pinterest', icon: '❧', url: '#' },
  { name: 'Twitter', icon: '✦', url: '#' },
  { name: 'Facebook', icon: '❦', url: '#' }
];

export const SocialLinks = () => {
  return (
    <div className="card-gothic p-6">
      <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Follow the Shadows</h3>
      <div className="gothic-divider">
        <div className="gothic-ornament">✧</div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gothic-200 hover:text-crimson-500 
                     transition group"
          >
            <span className="text-crimson-500 group-hover:scale-110 transition">
              {link.icon}
            </span>
            <span className="text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};