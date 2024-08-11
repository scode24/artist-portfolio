import { create } from "zustand";

const useMenuOpenCloseStore = create((set) => ({
  menuOpen: false,
  changeMenuState: (value) => set((state) => ({ menuOpen: value })),
}));

const useFilterOpenCloseStore = create((set) => ({
  filterOpen: false,
  changeFilterState: (value) => set((state) => ({ filterOpen: value })),
}));

const useFilterMenuStore = create((set) => ({
  filterMenu: [],
  updateFilterMenu: (data) => set((state) => ({ filterMenu: data })),
}));

export { useFilterMenuStore, useFilterOpenCloseStore, useMenuOpenCloseStore };
