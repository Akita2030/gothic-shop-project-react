import React from 'react';

export const Toast = ({ message, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="bg-gothic-800 border border-crimson-500 text-gothic-100 px-6 py-4 rounded-sm shadow-xl">
        <p className="font-gothic">{message}</p>
      </div>
    </div>
  );
};