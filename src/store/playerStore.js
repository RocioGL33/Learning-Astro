import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlating: false,
  volume: 1,
  setVolume: (volume) => set({ volume }),
  currentMusic: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
