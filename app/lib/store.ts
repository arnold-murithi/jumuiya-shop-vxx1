import { Product } from "@prisma/client";
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
//import type {} from '@redux-devtools/extension'

interface CartState {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
}

export const useProductStore = create<CartState>()(
    devtools(
        persist(
            (set) => ({
                cart: [],
                addToCart: (product) => {
                    set((state) => ({ cart: [...state.cart, product] }))
                },
                removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((product) => product.id !== id) })),
            }),
            {
                name: 'cart-storage',
            },
        )
    )
)