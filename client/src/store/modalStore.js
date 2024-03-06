import { create } from "zustand";

const modalStore = (set) => ({
  open: false,
  food: {},
  setFood: (showFood) => set((state) => (state.food = showFood)),
  setOpen: () => set((state) => ({ open: !state.open })),
});

const useModalStore = create(modalStore);

export default useModalStore;
