import create from "zustand";

const useUserStore = create((set) => ({
  user: null,
  login: (email) => set({ user: { email: email } }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
