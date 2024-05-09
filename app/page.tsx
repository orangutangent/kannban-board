'use client'

import useCards, { ICard } from "@/features/useCards";
import useColumns from "@/features/useColumns";
import { useEffect } from "react";
import Column from "../widgets/column";
export default function Home() {
  const { cards, fetchCards, addCard, updateCard, deleteCard } = useCards()
  const { columns, fetchColumns } = useColumns()
  useEffect(()=>{
    fetchColumns()
  
}, [])

  const onAddClick = () => {
    addCard({ title: "hello", description: "world", status: "todo", tag: [] })
  }
  
  const onUpdateClick = (card: ICard) => {
    updateCard({ ...card, title: "updated" })
  }
  return (
    <main className="w-screen h-screen ">
      <ul className="flex flex-row gap-1">
      {columns.map((data, key)=><Column {...data} key={key}/>)}
      </ul>
      
      
     
      {/* <div className="flex gap-4 cursor-pointer">

      <button onClick={fetchCards}>Fetch</button>
      <button onClick={onAddClick}>Add</button>
      </div>
      <div>
        {cards.map((card) => (
          <div key={card.id} className="flex gap-4">
            <button onClick={() => card.id && deleteCard(card.id)}>Delete</button>
            <button onClick={() => card.id && onUpdateClick(card)}>Update</button>
            <div >{card.id}</div>
            <div >{card.title}</div>
            <div>{card.description}</div>
            <div>{card.status}</div>
          </div>

        ))}
      </div> */}
    </main>
  );
}
