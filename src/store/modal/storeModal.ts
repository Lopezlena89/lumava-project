import { create } from 'zustand';

interface State {
  isSideModal: boolean;
  openSideModal: () => void;
  closeSideModal: () => void;
}


export const useModalStore = create<State>()((set) => ({
    isSideModal: false,
  openSideModal: () => set({ isSideModal: true }),
  closeSideModal: () => set({ isSideModal: false }),
}));