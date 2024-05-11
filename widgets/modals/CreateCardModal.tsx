'use client'
import useCards, { ICard } from "@/features/useCards";
import Input from "@/shared/UI/Input";
import Modal from "@/shared/UI/modal";
import useCreateCardModal from "@/features/useCreateCardModal";
import React from "react";
import Textarea from "@/shared/UI/Textarea";
import { IoAdd } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



const CreateCardModal  = () => {
    const { isOpen, setClose,status:columnTitle } = useCreateCardModal()
    const { addCard } = useCards()
    const [card,setCard] = React.useState<ICard>({
        title: "",
        description: "",
        status: "todo",
        tag: [],
    } as ICard)
    const handleAddTags = (e: any) => {
        e.preventDefault()
        setCard({...card, tag: [...card.tag, ""]})
    }
    const body = (
        <div className="w-full flex flex-col gap-4 text-black   ">
            <label htmlFor="title">Title</label>
            <Input placeholder="title" name="title" onChange={(e) => {
                e.preventDefault()
                setCard({...card, title: e.target.value})
            }} value={card.title}/>
            <label htmlFor="description">Description</label>
            <Textarea placeholder="description" name="description" onChange={(e) => {
                e.preventDefault()
                setCard({...card, description: e.target.value})
            }} value={card.description}/>
            <div className="flex gap-2 items-center ">
                <label htmlFor="tag">Tags</label>
                <button 
                className="flex items-center justify-center h-min hover:bg-[#EBEBFF] hover:scale-105 p-[2px] rounded-full"
                onClick={(e)=>handleAddTags(e)}>
                    <IoAdd size={20} />
                </button>
            </div>
            {card.tag && card.tag.map((tag, i) => 
            <div key={i} className="w-full flex gap-2 items-center">

                <Input  placeholder="Tag" name="tag" value={tag} 
                    onChange={(e)=>{
                        let newTags = [...card.tag]
                        newTags[i] = e.target.value
                        setCard({...card, tag: newTags})
                    }}
                />
                <button 
                className="flex items-center h-min justify-center hover:bg-[#EBEBFF] hover:scale-105 p-[2px] rounded-full"
                onClick={(e) => {
                    e.preventDefault()
                    let newTags = [...card.tag]
                    newTags.splice(i, 1)
                    setCard({...card, tag: newTags})
                }}>
                    <IoClose size={20} />
                </button>
            </div>)}

        </div>
    )

    const onSubmit = (e: any) => {
        e.preventDefault()
        addCard({...card, status: columnTitle})
        setClose()
        setCard({
            title: "",
            description: "",
            status: "todo",
            tag: [],
        })
    }
    return ( 
        <Modal title="Create New Card" actionLabel="Create" body={body} onSubmit={(e)=>onSubmit(e)} onClose={setClose} isOpen={isOpen}/>
     );
}
 
export default CreateCardModal;