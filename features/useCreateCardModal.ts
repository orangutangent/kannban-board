import {create} from "zustand";

export interface ICreateCardModal {
    isOpen: boolean
    status: string
    setStatus: (status:string) => void
    setOpen: () => void
    setClose: () => void
}

const useCreateCardModal = create<ICreateCardModal>((set) => ({
    isOpen: false,
    status: '',
    setStatus: (status:string) => set({status}),
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false}),
}))

export default useCreateCardModal