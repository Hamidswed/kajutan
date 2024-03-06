import { create } from "zustand";

const modalStore = (set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
});

const useModalStore = create(modalStore);

export default useModalStore;
