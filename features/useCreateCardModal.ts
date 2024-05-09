import {create} from "zustand";

export interface ICreateCardModal {
    isOpen: boolean
    setOpen: () => void
    setClose: () => void
}

const useCreateCardModal = create<ICreateCardModal>((set) => ({
    isOpen: false,
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false}),
}))

export default useCreateCardModal