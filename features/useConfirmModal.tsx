import { create } from "zustand";

interface IConfirmModal {
    isOpen: boolean
    setOpen: () => void
    setClose: () => void
}

 const useConfirmModal = create<IConfirmModal>((set) => ({
    isOpen: false,
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false})
}))

export default useConfirmModal