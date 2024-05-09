import axios from "axios";
import { create } from "zustand";

export interface ICard {
    id?: number
    title: string
    description: string
    status: string
    tag: string[]
}

interface UseCardsInterface {
    cards: ICard[]
    fetchCards: () => void
    addCard: (card: ICard) => void
    updateCard: (card: ICard) => void
    deleteCard: (id: number) => void
}

const fetchCards = async () => {
    try{
        const { data } = await axios.get('https://663baf1ffee6744a6ea2910b.mockapi.io/cards')
        return data
    } catch(error){
        if (axios.isAxiosError(error)) {
            console.log(error.status)
            console.error(error.response);
          } else {
            console.error(error);
          }
    }
    
    
}

const useCards = create<UseCardsInterface>((set) => ({
    cards: [],
    fetchCards: async () => {
        const data = await fetchCards()
        set({ cards: data })
    },
    addCard: async (card: ICard) => {
        await axios.post('https://663baf1ffee6744a6ea2910b.mockapi.io/cards', card)
        const data = await fetchCards()
        set({ cards: data })
    },
    updateCard: async (card: ICard) => {
        await axios.put(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${card.id}`, card)
        const data = await fetchCards()
        set({ cards: data })
    },
    deleteCard: async (id: number) => {
        await axios.delete(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${id}`)
        const data = await fetchCards()
        set({ cards: data })
    }
    
}))

export default useCards;