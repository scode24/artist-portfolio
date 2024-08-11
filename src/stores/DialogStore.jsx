import { create } from "zustand";

const useDialogStore = create((set) => ({
  data: undefined,
  push: (dataObj) => set((state) => ({ data: dataObj })),
}));

export default useDialogStore;
