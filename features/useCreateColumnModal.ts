import { create } from 'zustand';

export interface ICreateColumnModal {
	isOpen: boolean;
	setOpen: () => void;
	setClose: () => void;
}

const useCreateColumnModal = create<ICreateColumnModal>((set) => ({
	isOpen: false,
	setOpen: () => set({ isOpen: true }),
	setClose: () => set({ isOpen: false }),
}));

export default useCreateColumnModal;
