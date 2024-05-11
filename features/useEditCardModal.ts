import {create} from "zustand";

export interface IEditCardModal {
    isOpen: boolean
    editCardId: number | undefined
    setEditCardId: (id:number) => void
    setOpen: () => void
    setClose: () => void
}

const useEditCardModal = create<IEditCardModal>((set) => ({
    isOpen: false,
    editCardId:undefined,
    setEditCardId: (id:number) => set({editCardId: id}),
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false}),
}))

export default useEditCardModal