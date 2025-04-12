"use client"
import ListItem from '@/components/ListItem'
import List from '@/components/ListUnordered'
import { useSearchParams } from 'next/navigation'

type Product = {
    id: string;
    name: string;
    priceInCents: number;
    filePath: string;
    imagePath: string;
    description: string;
    isAvailableForPurchase: boolean;
    createdAt: Date;
    updatedAt: Date;
}
type Props = {
    products: Product[];
}
export default async function SearchProducts({products}:{products: Props["products"]}) {
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const filteredProducts = Array.isArray(products) ? products.filter((product) =>{
        return product.name.toLowerCase().includes(query.toLowerCase())
    }) : [];

    return(
        <>
            <h1 data-test="products-header" className="font-semibold text-2xl">Kids Product Page</h1> 
            <List data-test="product-list">
                {Array.isArray(products) && filteredProducts.map((product) =>(
                    <ListItem key={product.id} product={product}/>
                ))}
            </List>
        </>
    )
}