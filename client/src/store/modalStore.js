import { create } from "zustand";

const modalStore = (set) => ({
  open: false,
  openEdit: false,
  openDelete: false,
  food: {},
  setFood: (showFood) => set((state) => (state.food = showFood)),
  setOpen: () => set((state) => ({ open: !state.open })),
  setOpenEdit: () => set((state) => ({ openEdit: !state.openEdit })),
  setOpenDelete: () => set((state) => ({ openDelete: !state.openDelete })),
});

const useModalStore = create(modalStore);

export default useModalStore;
