import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        items: [...state.items, { ...product, quantity: 1 }]
      };
    });
  },
  
  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    }));
  },
  
  getTotalPrice: () => {
    const state = get();
    return state.items.reduce((total, item) => 
      total + (item.price * item.quantity), 0
    );
  },
  
  clearCart: () => set({ items: [] })
}));