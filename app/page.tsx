'use client'

import React from "react";
import useCards, { Card } from "@/features/useCards";

export default function Home() {
  const { cards, fetchCards, addCard, updateCard, deleteCard } = useCards()
  const onAddClick = () => {
    addCard({ title: "hello", description: "world", status: "todo", tags: [] })
  }
  
  const onUpdateClick = (card: Card) => {
    updateCard({ ...card, title: "updated" })
  }
  return (
    <main className="w-screen h-screen ">
      <div className="flex gap-4 cursor-pointer">

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
      </div>
    </main>
  );
}
