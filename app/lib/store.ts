import { Product } from "@prisma/client";
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

// type CartItem = Product & {
//     quantity: number;
// }

type CartState = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}

export const useProductStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
                removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) }))
            }),
            {
                name: 'cart-storage',
                // version: 1,
                // migrate: (persistedState, version) => {
                //     if (version === 1) {
                //         return { cart: [] }
                //     }
                //     return persistedState
                // }
            },
        )
    )
)
// addToCart: (product) => set((state) => {
//     const existingItem = state.cart.findIndex((item) => item.id === product.id)
//     if (existingItem !== -1) {
//         const updatedCart = state.cart.map((item, index) =>
//             index === existingItem ? { ...item, quantity: item.quantity + 1 } : item
//         )
//         return { cart: updatedCart }
//     }
//     return { cart: [...state.cart, { ...product, quantity: 1 }] }
// }),