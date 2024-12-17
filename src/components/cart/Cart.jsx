import React from 'react';
import { useCartStore } from '../../store/cartStore';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCartStore();
  
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-fraktur text-crimson-500 mb-4">Your Cart Awaits</h2>
        <p className="text-gothic-200">Your collection is empty</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-fraktur text-crimson-500 mb-8">Your Dark Collection</h2>
      
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="card-gothic p-4 flex items-center gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover"
            />
            
            <div className="flex-1">
              <h3 className="text-xl font-gothic text-gothic-100">{item.name}</h3>
              <p className="text-gothic-200">${item.price}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center border-2 border-gothic-200/20 
                         text-gothic-200 hover:border-crimson-500 hover:text-crimson-500 transition"
              >
                -
              </button>
              <span className="text-gothic-100 w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center border-2 border-gothic-200/20 
                         text-gothic-200 hover:border-crimson-500 hover:text-crimson-500 transition"
              >
                +
              </button>
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-gothic-200 hover:text-crimson-500 transition uppercase tracking-wider text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 card-gothic p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gothic-200 uppercase tracking-wider">Total</span>
          <span className="text-2xl font-fraktur text-crimson-500">
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
        <button className="btn-gothic w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};