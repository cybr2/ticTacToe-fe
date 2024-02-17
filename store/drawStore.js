import { create } from 'zustand';

const useDrawStore = create((set) => ({
  drawCount: 0,
  setDrawCount : (val) => set({ drawCount: val}),
  incrementDrawCount: () => set((state) => ({ drawCount: state.drawCount + 1 })),
}));

export default useDrawStore;