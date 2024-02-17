import { create } from 'zustand';

export const winnerStore = create((set) => ({ 
    status : '',
    setStatus : (val) => set({ status: val}) 
}))