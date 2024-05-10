import axios from 'axios';
import { create } from 'zustand';
import useMessage from './useMessage';

export interface IColumn {
	id: string;
	title: string;
	color: string;
}

export enum columnColors {
    white= '#F5F5FE',
    purple = '#EBEBFF',
    pink = '#F9E3FD',
    gray = '#ECEDEF',
    aqua = '#E7F8F8',
    blue='#E3F3FC',
    yellow='#FFF6E1',
    green='#EEF8E8',
    red='#FBE7E5',
}

interface UseColumnsInterface {
	columns: IColumn[];
	fetchColumns: () => void;
	replaceColumn: (index1: number, index2: number) => void;
	addColumn: (column: IColumn) => void;
	deleteColumn: (id: string) => void;
	updateColumn: (column: IColumn) => void;

}

const fetchColumns = async () => {
	const { data } = await axios.get(
		'https://663baf1ffee6744a6ea2910b.mockapi.io/columns'
	);
	return data;
};
const useColumns = create<UseColumnsInterface>((set) => ({

	columns: [],
	fetchColumns: async () => {
		try {
			const data = await fetchColumns();
			set({ columns: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	replaceColumn(index1, index2) {
		set((state) => {
			const newColumns = [...state.columns];
			if (
				index1 >= 0 &&
				index2 >= 0 &&
				index1 < newColumns.length &&
				index2 < newColumns.length
			) {
				[newColumns[index1], newColumns[index2]] = [
					newColumns[index2],
					newColumns[index1],
				];
			}
			return { columns: newColumns };
		});
	},
	addColumn: async (column: IColumn) => {
		try {
			await axios.post(
				'https://663baf1ffee6744a6ea2910b.mockapi.io/columns',
				column
			);
			const data = await fetchColumns();
			set({ columns: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	deleteColumn: async (id: string) => {
		try {
			await axios.delete(
				`/https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${id}`
			);
			const data = await fetchColumns();
			set({ columns: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
	updateColumn: async (column: IColumn) => {
		try {
			await axios.put(
				`https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${column.id}`,
				column
			);
			const data = await fetchColumns();
			set({ columns: data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				useMessage.getState().setMessage(error.message);
			}
		}
	},
}));

export default useColumns;
