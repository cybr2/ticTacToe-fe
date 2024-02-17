import { create } from 'zustand';

const useRoundStore = create((set) => ({
  roundCount: 1,
  setRoundCount: (newValue) => set({ roundCount: newValue }),
  incrementRoundCount: () => set((state) => ({ roundCount: state.roundCount + 1 })),
}));

export default useRoundStore;