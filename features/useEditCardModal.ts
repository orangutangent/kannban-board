import {create} from "zustand";

export interface IEditCardModal {
    isOpen: boolean
    setOpen: () => void
    setClose: () => void
    editCardId: string
    setEditCardId: (id: string) => void
}

const useEditCardModal = create<IEditCardModal>((set) => ({
    isOpen: false,
    editCardId: "",
    setEditCardId: (id) => set({editCardId: id}),
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false}),
}))

export default useEditCardModal