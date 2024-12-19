import React from 'react';

export const Newsletter = () => {
  return (
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
};