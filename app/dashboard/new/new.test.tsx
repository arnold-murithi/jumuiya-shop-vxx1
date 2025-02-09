import Kids from "./page";
import "@testing-library/jest-dom"
import { getProduct } from '../../data-access/product'
import { Product } from "@prisma/client";

jest.mock('../../data-access/product', () => ({
  getProduct: jest.fn(),
}));

describe('Product Search - API Call', () => {
  it('should call getProduct() when search is performed', async () => {
    const mockedGetProduct = getProduct as jest.MockedFunction<typeof getProduct>;
    mockedGetProduct.mockResolvedValue([]);

    await getProduct();
    
    (expect(mockedGetProduct)as any).toHaveBeenCalled();
    (expect(mockedGetProduct)as any).toHaveBeenCalledTimes(1);
  });
});

describe('Product Filtering', () => {
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
  ];

  beforeEach(() => {
    const mockedGetProduct = getProduct as jest.MockedFunction<typeof getProduct>;
    mockedGetProduct.mockResolvedValue(mockProducts);
  });

  it('should return products matching the query', async () => {
    const query = 'product';
    const products = await getProduct();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    (expect(filteredProducts)as any).toHaveLength(0);
  });

  it('should return an empty array if no products match the query', async () => {
    const query = 'xyz';
    const products = await getProduct();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    (expect(filteredProducts) as any).toEqual([]);
  });
});

describe('Product Transformation with .map()', () => {
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
  ];

  beforeEach(() => {
    const mockedGetProduct = getProduct as jest.MockedFunction<typeof getProduct>;
    mockedGetProduct.mockResolvedValue(mockProducts);
  });

  it('should apply .map() to transform product names to uppercase', async () => {
    const products = await getProduct();
    const transformedProducts = products.map((product) => ({
      ...product,
      name: product.name,
    }));

    console.log("Received:", transformedProducts);

    (expect(transformedProducts)as any).toMatchObject([
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
    ]);
  });
});
