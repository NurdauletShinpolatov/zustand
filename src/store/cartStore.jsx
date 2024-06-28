import { produce } from "immer";
import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    lang: 'en',
    addToCart: (book) => set(state => ({
        cart: [...state.cart, book]
    })),
    removeFromCart: (id) => set(state => ({
        cart: state.cart.filter(book => book.id !== id)
    })),
    clearCart: () => set({ 
        cart: [] 
    }),
    setLang: (lang) => set(produce((state) => { state.lang = lang })),

}))