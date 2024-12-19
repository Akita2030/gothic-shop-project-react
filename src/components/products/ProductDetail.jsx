import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { useToast } from '../../hooks/useToast';
import { Toast } from '../ui/Toast';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore(state => state.addToCart);
  const { toast, showToast, hideToast } = useToast();
  const [selectedSize, setSelectedSize] = useState('M');
  
  const product = products.find(p => p.id === parseInt(id));
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  
  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize });
    showToast('Item added to your collection');
  };
  
  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-fraktur text-crimson-500 mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/products')}
          className="btn-gothic mt-4"
        >
          Return to Collection
        </button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-gothic-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-[600px] object-cover card-gothic"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-gothic-100 italic">
                "Embrace the darkness with this exquisite piece"
              </p>
            </div>
          </div>
          
          {/* Details Section */}
          <div className="space-y-8">
            <div className="card-gothic p-8">
              <div className="gothic-divider mb-6">
                <span className="text-crimson-500 text-2xl">✧</span>
              </div>
              
              <h1 className="text-4xl font-fraktur text-crimson-500 mb-4 text-center">{product.name}</h1>
              
              <div className="gothic-divider">
                <span className="text-crimson-500">❧</span>
              </div>
              
              <p className="text-gothic-200 text-lg italic text-center mb-6">
                {product.description}
              </p>
              
              <div className="text-3xl font-fraktur text-gothic-100 text-center">
                ${product.price}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="card-gothic p-6">
              <h3 className="text-sm uppercase tracking-wider text-gothic-200 mb-4 text-center">Select Size</h3>
              <div className="flex justify-center gap-4">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-crimson-500 text-crimson-500'
                        : 'border-gothic-200/20 text-gothic-200 hover:border-crimson-500 hover:text-crimson-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="btn-gothic w-full"
              >
                Add to Collection
              </button>
              
              <button
                onClick={() => navigate('/products')}
                className="w-full px-6 py-3 border-2 border-gothic-200/20 text-gothic-200 
                         hover:border-crimson-500 hover:text-crimson-500 transition 
                         uppercase tracking-wider text-sm"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
      {toast.show && <Toast message={toast.message} onClose={hideToast} />}
    </div>
  );
};