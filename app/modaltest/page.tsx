'use client'
import CreateCardModal from "@/widgets/modals/CreateCardModal";
import useCreateCardModal from "@/features/useCreateCardModal";
import Button, { ButtonTypes } from "@/shared/UI/Button";
import useCards from "@/features/useCards";
import React from "react";


const TestPage = () => {
    const {  setOpen } = useCreateCardModal()
    const { cards, fetchCards,deleteCard } = useCards()
    React.useEffect(() => {
        fetchCards()
    },[])
    return ( 
        <div>
            <Button buttonType={ButtonTypes.SECONDARY} label="Open" onClick={() => {setOpen()}}/>
            <CreateCardModal columnTitle="test"  />

            <div className="w-full flex gap-4 flex-wrap px-[24px]">
                {cards && cards.map((card) => (
                    <div className="w-[256px] text-black bg-[#EBEBFF] border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]" key={card.id}>
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                        <p>{card.tag}</p>
                        <p>{card.status}</p>
                        <Button buttonType={ButtonTypes.SECONDARY} label="Delete" onClick={() => { card.id && deleteCard(card.id)}}/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default TestPage;