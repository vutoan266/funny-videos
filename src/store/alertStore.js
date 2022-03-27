import create from "zustand";

const useAlertStore = create((set) => ({
  message: null,
  show: (newMessage) => set({ message: newMessage }),
  hide: () => set({ message: null }),
}));

export default useAlertStore;
