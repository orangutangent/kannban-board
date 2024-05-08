import { create } from "zustand";
import axios from "axios";

export interface Card {
    id?: string
    title: string
    description: string
    status: string
    tags: string[]
}

interface UseCardsInterface {
    cards: Card[]
    fetchCards: () => void
    addCard: (card: Card) => void
    updateCard: (card: Card) => void
    deleteCard: (id: string) => void
}

const fetchCards = async () => {
    const { data } = await axios.get('https://663baf1ffee6744a6ea2910b.mockapi.io/cards')
    return data
}

const useCards = create<UseCardsInterface>((set) => ({
    cards: [],
    fetchCards: async () => {
        const data = await fetchCards()
        set({ cards: data })
    },
    addCard: async (card: Card) => {
        await axios.post('https://663baf1ffee6744a6ea2910b.mockapi.io/cards', card)
        const data = await fetchCards()
        set({ cards: data })
    },
    updateCard: async (card: Card) => {
        await axios.put(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${card.id}`, card)
        const data = await fetchCards()
        set({ cards: data })
    },
    deleteCard: async (id: string) => {
        await axios.delete(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${id}`)
        const data = await fetchCards()
        set({ cards: data })
    }
    
}))

export default useCards;