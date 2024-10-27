import { Product } from "@prisma/client";

export function getCartTotal(products: Product[]): string {
    const total = products.reduce((accumulator, currentProdut) =>
        accumulator + currentProdut.priceInCents
        , 0)
    return `${total.toFixed(2)}`
}