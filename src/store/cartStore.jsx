import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (book) => set(state => ({cart: [...state.cart, book]})),
    removeFromCart: (id) => set(state => ({
        cart: state.cart.filter(book => book.id !== id)
    })),
    clearCart: () => set({ cart: [] }),
}))