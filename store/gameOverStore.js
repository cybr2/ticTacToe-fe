import { create } from 'zustand';

export const gameOverStore = create((set) => ({ 
    isGameOver : false,
    setIsGameOver : (val) => set({ isGameOver: val}) 
}))