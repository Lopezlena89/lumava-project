import { create } from 'zustand';

interface State {
  isSideModalPreview: boolean;
  openSideModalPreview: () => void;
  closeSideModalPreview: () => void;
}


export const useModalPreviewStore = create<State>()((set) => ({
    isSideModalPreview: true,
  openSideModalPreview: () => set({ isSideModalPreview: true }),
  closeSideModalPreview: () => set({ isSideModalPreview: false }),
}));