import { create } from 'zustand';

export interface IEditCardModal {
	isOpen: boolean;
	editColumnId: string | undefined;
	setEditColumnId: (id: string) => void;
	setOpen: () => void;
	setClose: () => void;
}

const useEditCardModal = create<IEditCardModal>((set) => ({
	isOpen: false,
	editColumnId: undefined,
	setEditColumnId: (id: string) => set({ editColumnId: id }),
	setOpen: () => set({ isOpen: true }),
	setClose: () => set({ isOpen: false }),
}));

export default useEditCardModal;
