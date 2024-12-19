import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../../data/products';

export const FeaturedItems = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="card-gothic p-6 mb-8">
      <h3 className="font-fraktur text-xl text-crimson-500 mb-4">Featured Pieces</h3>
      <div className="gothic-divider">
        <div className="gothic-ornament">✧</div>
      </div>
      <div className="space-y-4 mt-4">
        {featuredProducts.map(product => (
          <Link 
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
          >
            <div className="flex items-center gap-3">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover border border-gothic-200/10 
                         group-hover:border-crimson-500 transition"
              />
              <div>
                <h4 className="text-gothic-100 group-hover:text-crimson-500 
                             transition text-sm font-semibold">
                  {product.name}
                </h4>
                <p className="text-gothic-200 text-xs">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};