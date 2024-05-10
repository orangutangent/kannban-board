'use client'

import Input from "@/shared/UI/Input";
import Modal from "@/shared/UI/modal";
import React from "react";
import useCreateColumnModal from "@/features/useCreateColumnModal";
import useColumns, { IColumn, columnColors } from "@/features/useColumns";
import SelectColor from "@/shared/UI/SelectColor";



const CreateCardModal = () => {
    const { isOpen, setClose } = useCreateColumnModal()
    const { addColumn } = useColumns()
    const [column,setColumn] = React.useState<IColumn>({
        title: "",
        color: columnColors.red,
    } as IColumn)
    
    const body = (
        <div className="w-full flex flex-col gap-4 text-black   ">
            <label htmlFor="title">Title</label>
            <Input placeholder="title" name="title" onChange={(e) => {
                e.preventDefault()
                setColumn({...column, title: e.target.value})
            }} value={column.title}/>
            <SelectColor value={column.color} onChange={(value) => setColumn({...column, color: value})}/>
        </div>
    )

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(column)
        addColumn({...column})
    }
    return ( 
        <Modal title="Create New Card" actionLabel="Create" body={body} onSubmit={(e)=>onSubmit(e)} onClose={setClose} isOpen={isOpen}/>
     );
}
 
export default CreateCardModal;