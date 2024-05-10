'use client'
import useCards, { ICard } from "@/features/useCards";
import Input from "@/shared/UI/Input";
import Modal from "@/shared/UI/modal";
import React from "react";
import Textarea from "@/shared/UI/Textarea";
import { IoAdd } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useEditCardModal from "@/features/useEditCardModal";
import axios from "axios";

interface IProps {
    cardId: number
}

const EditCardModal: React.FC<IProps> = () => {
    const { isOpen, setClose, editCardId } = useEditCardModal()
    const [newCard,setNewCard] = React.useState<ICard>({
        id: cardId,
        title: "",
        description: "",
        status: "",
        tag: []
    }as ICard)
    const { updateCard } = useCards()
    React.useEffect(() => {
        const getCard = async () => {
            
            const { data } = await axios.get(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${cardId}`)
            return data
        }
        getCard().then((data) => setNewCard(data))
    },[cardId,isOpen])
    const handleAddTags = (e: any) => {
        e.preventDefault()
        setNewCard({...newCard, tag: [...newCard.tag, ""]})
    }
    const body = (
        <div className="w-full flex flex-col gap-4 text-black   ">
            <label htmlFor="title">Title</label>
            <Input placeholder="title" name="title"  onChange={(e) => {
                e.preventDefault()
                setNewCard({...newCard, title: e.target.value})
            }} value={newCard.title}/>
            <label htmlFor="description">Description</label>
            <Textarea placeholder="description" name="description" onChange={(e) => {
                e.preventDefault()
                setNewCard({...newCard, description: e.target.value})
            }} value={newCard.description}/>
            <div className="flex gap-2 items-center ">
                <label htmlFor="tag">Tags</label>
                <button 
                className="flex items-center justify-center h-min hover:bg-[#EBEBFF] hover:scale-105 p-[2px] rounded-full"
                onClick={(e)=>{
                    handleAddTags(e)}}>
                    <IoAdd size={20} />
                </button>
            </div>
            {newCard.tag && newCard.tag.map((tag, i) => 
            <div key={i} className="w-full flex gap-2 items-center">

                <Input  placeholder="Tag" name="tag" value={tag} 
                    onChange={(e)=>{
                        let newTags = [...newCard.tag]
                        newTags[i] = e.target.value
                        setNewCard({...newCard, tag: newTags})
                    }}
                />
                <button 
                className="flex items-center h-min justify-center hover:bg-[#EBEBFF] hover:scale-105 p-[2px] rounded-full"
                onClick={(e) => {
                    e.preventDefault()
                    let newTags = [...newCard.tag]
                    newTags.splice(i, 1)
                    setNewCard({...newCard, tag: newTags})
                }}>
                    <IoClose size={20} />
                </button>
            </div>)}

        </div>
    )

    const onSubmit = (e: any) => {
        e.preventDefault()
        updateCard(newCard)
        setClose()
    }
    return ( 
        <Modal title="Create New Card" actionLabel="Update" body={body} onSubmit={(e)=>onSubmit(e)} onClose={setClose} isOpen={isOpen}/>
     );
}
 
export default EditCardModal;