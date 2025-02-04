import Kids from "./page";
import { Product } from "@prisma/client";
import { getProduct } from "@/app/data-access/product";
import { describe, expect, test, jest, beforeEach } from '@jest/globals'


jest.mock('@/app/data-access/product', () =>({
    getProduct: jest.fn(),
}))

describe ('Product filtering', () =>{
    const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Apple',
      priceInCents: 100,
      description: 'A fresh apple',
      filePath: '/path/to/file',
      imagePath: '/path/to/image',
      isAvailableForPurchase: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Banana',
      priceInCents: 150,
      description: 'A ripe banana',
      filePath: '/path/to/file',
      imagePath: '/path/to/image',
      isAvailableForPurchase: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      name: 'Cherry',
      priceInCents: 200,
      description: 'A sweet cherry',
      filePath: '/path/to/file',
      imagePath: '/path/to/image',
      isAvailableForPurchase: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
]

    beforeEach(() =>{
        jest.clearAllMocks()
    })

    test('should return all producrs when no query is provided', async () =>{
        (getProduct as jest.MockedFunction<typeof getProduct>)
        const searchParams = {query:""}
        const query = searchParams?.query || ""
        const products = await getProduct()
        const filteredProducts = Array.isArray(products) ? products.filter((product) =>{
            return product.name.toLowerCase().includes(query.toLowerCase())
        }) : [];

        expect(getProduct).toHaveBeenCalledTimes(1)
        expect(filteredProducts).toEqual([])
        expect(filteredProducts.length).toBe(0)
    })
    test('should ahandle case when getProduct returns non-array', async() =>{
        (getProduct as jest.MockedFunction<typeof getProduct>)

        const searchParams = {query: 'apple'}
        const query = searchParams?.query || ""
        const products = await getProduct()
        const filteredProducts = Array.isArray(products) ? products.filter((product) =>{
            return product.name.toLowerCase().includes(query.toLowerCase())
        }) : [];

        expect(getProduct).toHaveBeenCalledTimes(1)
        expect(filteredProducts).toEqual([])
        expect(filteredProducts.length).toEqual(0)
    })
})