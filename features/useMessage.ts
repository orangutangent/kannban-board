import { create } from 'zustand';

interface Imessage {
	message: string;
	setMessage: (mes: string) => void;
}

const useMessage = create<Imessage>((set) => ({
	message: '',
	setMessage: (mes) => set({ message: mes }),
}));

export default useMessage;
