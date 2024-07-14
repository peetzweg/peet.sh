import { create } from 'zustand';

type Store = {
  isPlaying: boolean;
  progress: number;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  setProgress: (progress: number) => void;
};

export const useStore = create<Store>()((set) => ({
  isPlaying: false,
  progress: 0,
  play: () => set((state) => ({ isPlaying: true })),
  pause: () => set((state) => ({ isPlaying: false })),
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setProgress: (progress: number) => set((state) => ({ progress })),
}));
