'use client'
import CreateCardModal from "@/widgets/modals/CreateCardModal";
import useCreateCardModal from "@/features/useCreateCardModal";
import Button, { ButtonTypes } from "@/shared/UI/Button";
import useCards, { ICard } from "@/features/useCards";
import React from "react";
import useCreateColumnModal from "@/features/useCreateColumnModal";
import CreateColumnModal from "@/widgets/modals/CreateColumnModal";
import useColumns from "@/features/useColumns";
import useEditCardModal from "@/features/useEditCardModal";
import EditCardModal from "@/widgets/modals/EditCardModal";
import EditColumnModal from "@/widgets/modals/EditColumnModal";
import useEditColumnModal from "@/features/useEditColumnModal";
import ConfirmModal from "@/widgets/modals/ConfirmModal";


const TestPage = () => {
    const {  setOpen } = useCreateCardModal()
    const { setOpen: setCreateColumnModalOpen } = useCreateColumnModal()
    const {setOpen: setEditCardModalOpen, setEditCardId} = useEditCardModal()
    const {setOpen: setEditColumnModalOpen, setEditColumnId} = useEditColumnModal()
    const { cards, fetchCards,deleteCard } = useCards()
    const { columns, fetchColumns, deleteColumn } = useColumns()
    React.useEffect(() => {
        fetchCards()
        fetchColumns()
        
    },[])
    return ( 
        <div>
            <div className="flex gap-4">
            <Button buttonType={ButtonTypes.SECONDARY} label="Create Card" onClick={() => {setOpen()}}/>
            <Button buttonType={ButtonTypes.SECONDARY} label="Create Column" onClick={() => {
                setCreateColumnModalOpen()
                }}/>
            </div>
            { <EditColumnModal  />  }
            { <EditCardModal />  }
            <CreateCardModal  />
            <CreateColumnModal />
            <div className="w-full flex gap-4 flex-wrap px-[24px]">
                {cards && cards.map((card) => (
                    <div className="w-[256px] text-black bg-[#EBEBFF] border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]" key={card.id}>
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                        <p>{card.tag}</p>
                        <p>{card.status}</p>
                        <Button buttonType={ButtonTypes.SECONDARY} label="Delete" onClick={() => { card.id && deleteCard(card.id)}}/>
                        <Button buttonType={ButtonTypes.SECONDARY} label="Edit" onClick={() => { 
                            card.id && setEditCardId(card.id)
                            card.id && setEditCardId(card.id)
                            setEditCardModalOpen()
                            }}/>

                    </div>
                ))}
            </div>
            <div className="w-full mt-[24px] flex gap-4 flex-wrap px-[24px]">
                {columns && columns.map((column) => (
                    <div
                    style={{ backgroundColor: column.color }}
                    className="w-[256px] text-black border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]" key={column.id}>
                        <h1>{column.title}</h1>
                        <Button buttonType={ButtonTypes.SECONDARY} label="Delete" onClick={() => { column.id && deleteColumn(column.id)}}/>
                        <Button buttonType={ButtonTypes.SECONDARY} label="Edit" onClick={() => {
                            column.id && setEditColumnId(column.id)
                            column.id && setEditColumnId(column.id)
                            setEditColumnModalOpen()
                        }} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default TestPage;