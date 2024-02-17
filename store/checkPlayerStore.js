import { create }  from 'zustand';

// Create a store
export const checkPlayerStore = create((set) => ({
  isX: true,
  setIsX: (newValue) => set({ isX: newValue }),
}));
