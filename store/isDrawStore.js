import { create }  from 'zustand';

// Create a store
export const isDrawStore = create((set) => ({
  isDraw: 'false',
  setIsDraw :  (val) => set({ isDraw: val }),
}));