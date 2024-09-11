import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useProductStore = create(
    persist(
        (set) => ({
            product: 'Pizzas',
            cart: [],
            products: [],
            productsFixed: [],
            
            changeProduct: (product) => set({ product }),
            addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
            removeFromCart: (item) => set((state) => ({ cart: state.cart.filter((i) => i.name !== item) })),
            clearCart: () => set({ cart: [] }),

            setProducts: ((products) => set({ products })),
            addProducts: ((product) => set((state) => ({ products: [...state.products, product] }))),

            setProductsFixed: ((products) => set({ productsFixed: products })),
        }), {
            partialize: (state) => ({
                cart: state.cart,
            }),
        }
    )
);