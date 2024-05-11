import axios from 'axios';
import { create } from 'zustand';
import useMessage from './useMessage';


export interface ICard {
<<<<<<< Updated upstream
	id?: number;
	title: string;
	description: string;
	status: string;
	tag: string[];
}

interface UseCardsInterface {
	cards: ICard[];
	fetchCards: () => void;
	replaceCard: (index1: number, status1: string, index2: number, status2: string) => void;

	addCard: (card: ICard) => void;
	updateCard: (card: ICard) => void;
	deleteCard: (id: number) => void;
=======
    id?: string
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
    deleteCard: (id: string) => void
>>>>>>> Stashed changes
}

const fetchCards = async () => {
	try {
		const { data } = await axios.get(
			'https://663baf1ffee6744a6ea2910b.mockapi.io/cards'
		);
		return data;
	} catch (error) {

	}
};

const useCards = create<UseCardsInterface>((set) => ({
<<<<<<< Updated upstream
	cards: [],
	replaceCard(index1, status1, index2, status2) {
		set((state) => {
			const newCards = [...state.cards];
			if (status1 === status2) {
				[newCards[index1], newCards[index2]] = [
					newCards[index2],
					newCards[index1],
				];
			} else {
				newCards[index1].status = status2;
			}
			return { cards: newCards };
		});
	},
	fetchCards: async () => {
		try {
			const data = await fetchCards();
			set({ cards: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	addCard: async (card: ICard) => {
		try {
			await axios.post(
				'https://663baf1ffee6744a6ea2910b.mockapi.io/cards',
				card
			);
			const data = await fetchCards();
			set({ cards: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	updateCard: async (card: ICard) => {
		try {
			await axios.put(
				`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${card.id}`,
				card
			);
			const data = await fetchCards();
			set({ cards: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	deleteCard: async (id: number) => {
		try {
			await axios.delete(
				`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${id}`
			);
			const data = await fetchCards();
			set({ cards: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
}));
=======
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
    deleteCard: async (id: string) => {
        await axios.delete(`https://663baf1ffee6744a6ea2910b.mockapi.io/cards/${id}`)
        const data = await fetchCards()
        set({ cards: data })
    },
>>>>>>> Stashed changes

export default useCards;
