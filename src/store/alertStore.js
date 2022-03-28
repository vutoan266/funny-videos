import create from "zustand";

const useAlertStore = create((set) => ({
  message: null,
  error: null,
  show: (newMessage) => set({ message: newMessage, error: null }),
  showError: (newError) => set({ error: newError, message: null }),
  hide: () => set({ message: null, error: null }),
}));

export default useAlertStore;
