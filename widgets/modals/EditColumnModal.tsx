'use client'

import Input from "@/shared/UI/Input";
import Modal from "@/shared/UI/modal";
import React from "react";
import useColumns, { IColumn, columnColors } from "@/features/useColumns";
import SelectColor from "@/shared/UI/SelectColor";
import useEditColumnModal from "@/features/useEditColumnModal";
import useCards from "@/features/useCards";


const CreateCardModal = () => {
    const {cards,updateCard} = useCards()
    const { isOpen, setClose,editColumnId:columnId } = useEditColumnModal()
    const { updateColumn } = useColumns()
   const [prevTitle,setPrevTitle] = React.useState("")
    const [column,setColumn] = React.useState<IColumn>({
        title: "",
        color: columnColors.red,
    } as IColumn)

    React.useEffect(() => {
        if(!isOpen || !columnId) return
        const fetchColumn = async () => {
            const data = await fetch(`https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${columnId}`)
            data.json().then(data =>{
                setColumn(data);
                setPrevTitle(data.title)
            } )
        }
        fetchColumn()
    }, [columnId,isOpen])
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
        updateColumn(column)
        if(prevTitle !== column.title){
            cards.forEach((card) => {
                if (card.status === prevTitle){
                     updateCard({ ...card, status: column.title });
                } 
            })
        }
        setClose()
    }
    return ( 
        <Modal title="Create New Card" actionLabel="Save" body={body} onSubmit={(e)=>onSubmit(e)} onClose={setClose} isOpen={isOpen}/>
     );
}
 
export default CreateCardModal;