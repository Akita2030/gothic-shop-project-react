import React from 'react';

const quotes = [
  { text: "The oldest and strongest emotion of mankind is fear.", author: "H.P. Lovecraft" },
  { text: "We make our own monsters.", author: "Mary Shelley" },
  { text: "The boundaries which divide Life from Death are at best shadowy and vague.", author: "Edgar Allan Poe" },
  { text: "There is something haunting in the light of the moon.", author: "Joseph Conrad" }
];

export const Quote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="card-gothic p-6 mb-8">
      <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Gothic Quote</h3>
      <div className="gothic-divider">
        <div className="gothic-ornament">✧</div>
      </div>
      <blockquote className="text-gothic-200 italic text-sm mt-4">
        "{randomQuote.text}"
        <footer className="text-right mt-2 text-crimson-500">
          — {randomQuote.author}
        </footer>
      </blockquote>
    </div>
  );
};