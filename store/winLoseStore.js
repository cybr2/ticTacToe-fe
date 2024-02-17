import { create } from 'zustand';

const useWinLoseStore = create((set) => ({
  playerOneWinCount: 0,
  playerOneLoseCount: 0,
  playerTwoWinCount: 0,
  playerTwoLoseCount: 0,
  setPlayerOneWinCount : (val) => set({playerOneWinCount : val}),
  setPlayerOneLoseCount : (val) => set({playerOneLoseCount : val}),
  setPlayerTwoWinCount : (val) => set({playerTwoWinCount : val}),
  setPlayerTwoLoseCount : (val) => set({playerTwoLoseCount : val}),
  incrementPlayerOneWinCount: () => set((state) => ({ playerOneWinCount: state.playerOneWinCount + 1 })),
  incrementPlayerOneLoseCount: () => set((state) => ({ playerOneLoseCount: state.playerOneLoseCount + 1 })),
  incrementPlayerTwoWinCount: () => set((state) => ({ playerTwoWinCount: state.playerTwoWinCount + 1 })),
  incrementPlayerTwoLoseCount: () => set((state) => ({ playerTwoLoseCount: state.playerTwoLoseCount + 1 })),
}));

export default useWinLoseStore;