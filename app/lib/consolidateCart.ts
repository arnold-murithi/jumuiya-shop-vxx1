import { Product } from "@prisma/client"

export const getConsolidatedCart = (cart: Product[]) => {
    return cart.reduce((accumulator, item) => {
        const existingItem = accumulator.find((accItem) => accItem.id === item.id)
        if (existingItem) {
            existingItem.quantity! += 1
        } else {
            accumulator.push({ ...item, quantity: 1 })
        }
        return accumulator;
    }, [] as (Product & { quantity: number })[])
}