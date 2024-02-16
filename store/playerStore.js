import { create } from "zustand";

export const playerStore = create((set) => ({
  playerOne : '' ,
  playerTwo : '',
  setPlayerOne : (name) => set({ playerOne: name }),
  setPlayerTwo : (name) => set({ playerTwo: name }),
}));