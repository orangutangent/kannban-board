import { create } from "zustand";
import axios from "axios";

type Column = {
    id: string
    title: string
    color: string
}

const useColumns = create((set) => ({
    columns: [],
    fetchColumns: async () => {
        const { data } = await axios.get('/api/columns')
        set({ columns: data })
    },
    addColumn: async (column: Column) => {
        await axios.post('/api/columns', column)
    },
    deleteColumn: async (id: string) => {
        await axios.delete(`/api/columns/${id}`)
    },
    updateColumn: async (column: Column) => {
        await axios.put(`/api/columns/${column.id}`, column)
    },

}))

export default useColumns