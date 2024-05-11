import { create } from "zustand";

interface IConfirmModal {
    isOpen: boolean
    title: string
    text: string
    actionLabel: string 
    onConfirmFunc: (e?:any) => void
    setTitle: (title:string) => void
    setText: (body:string) => void
    setActionLabel: (label:string) => void
    setOnConfirmFunc: (func:(e?:any) => void) => void
    setOpen: () => void
    setClose: () => void
}

 const useConfirmModal = create<IConfirmModal>((set) => ({
    isOpen: false,
    title: "",
    text: "",
    actionLabel: "",
    onConfirmFunc: (e?:any) => {},
    setTitle: (title:string) => set({title}),
    setText: (text:string) => set({text}),
    setActionLabel: (label:string) => set({actionLabel:label}),
    setOnConfirmFunc: (func:(e?:any) => void) => set({onConfirmFunc:func}),
    setOpen: () => set({isOpen:true}),
    setClose: () => set({isOpen:false})
}))

export default useConfirmModal