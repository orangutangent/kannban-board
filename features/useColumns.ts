import { create } from "zustand";
import axios from "axios";

type Column = {
    id: string
    title: string
    color: string
}

type UseColumnsInterface = {
    columns: Column[]
    fetchColumns: () => void
    addColumn: (column: Column) => void
    deleteColumn: (id: string) => void
    updateColumn: (column: Column) => void
}

const fetchColumns = async () => {
    const { data } = await axios.get('/api/columns')
    return data
}

const useColumns = create<UseColumnsInterface>((set) => ({
    columns: [],
    fetchColumns: async () => {
        const data = await fetchColumns()
        set({ columns: data })
    },
    addColumn: async (column: Column) => {
        await axios.post('https://663baf1ffee6744a6ea2910b.mockapi.io/columns', column)
        const data = await fetchColumns()
        set({ columns: data })
    },
    deleteColumn: async (id: string) => {
        await axios.delete(`/https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${id}`)
        const data = await fetchColumns()
        set({ columns: data })
    },
    updateColumn: async (column: Column) => {
        await axios.put(`https://663baf1ffee6744a6ea2910b.mockapi.io/columns/${column.id}`, column)
        const data = await fetchColumns()
        set({ columns: data })
    },

}))

export default useColumns