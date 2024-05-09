import axios from "axios";
import { create } from "zustand";

export interface IColumn {
    id: string
    title: string
    color: string
}

interface UseColumnsInterface {
    columns: IColumn[]
    fetchColumns: () => void
    addColumn: (column: IColumn) => void
    deleteColumn: (id: string) => void
    updateColumn: (column: IColumn) => void
}

const fetchColumns = async () => {
    const { data } = await axios.get('https://663baf1ffee6744a6ea2910b.mockapi.io/columns')
    return data
}

const useColumns = create<UseColumnsInterface>((set) => ({
    columns: [],
    fetchColumns: async () => {
        const data = await fetchColumns()
        set({ columns: data })
    },
    addColumn: async (column: IColumn) => {
        await axios.post('https://663baf1ffee6744a6ea2910b.mockapi.io/columns', column)
        const data = await fetchColumns()
        set({ columns: data })
    },
    deleteColumn: async (id: string) => {
        await axios.delete(`/https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${id}`)
        const data = await fetchColumns()
        set({ columns: data })
    },
    updateColumn: async (column: IColumn) => {
        await axios.put(`https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${column.id}`, column)
        const data = await fetchColumns()
        set({ columns: data })
    },

}))

export default useColumns