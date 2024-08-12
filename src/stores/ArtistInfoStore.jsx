import { create } from "zustand";

const useArtistInfoStore = create((set) => ({
  artistInfo: undefined,
  addArtistInfo: (data) => {
    set((state) => {
      return { artistInfo: data };
    });
  },
}));

export default useArtistInfoStore;
