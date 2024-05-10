import {create} from "zustand";

export interface IEditCardModal {
    isOpen: boolean
    setOpen: () => void
    setClose: () => void
}

const useEditCardModal = create<IEditCardModal>((set) => ({
    isOpen: false,
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false}),
}))

export default useEditCardModal