import { create } from "zustand";

const useArtworkStore = create((set) => ({
  data: [],
  addArtwork: (data) => {
    set((state) => {
      const newState = { data: data };
      return newState;
    });
  },
}));

export default useArtworkStore;
