import { create } from "zustand";

const useUserAuthStore = create((set) => ({
  loggedInUser: undefined,
  setLoggedInUser: (data) => {
    set((state) => {
      return { loggedInUser: data };
    });
  },
}));

export default useUserAuthStore;
