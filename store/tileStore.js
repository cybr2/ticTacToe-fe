import { create }  from 'zustand';

// Create a store
export const tileStore = create((set) => ({
  squares: Array(9).fill(null),
  setSquares: (newSquares) => set({ squares: newSquares }),
}));
