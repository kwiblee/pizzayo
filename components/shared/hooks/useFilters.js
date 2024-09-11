import { create } from 'zustand'

export const useFilters = create((set) => ({
    sort: 'Popular first',
    price: [0, 300],
    
    setSort: (sort) => set({ sort }),
    setPrice: (price) => set({ price })
}));