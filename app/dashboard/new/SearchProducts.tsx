import { Product } from '@prisma/client'
import { getProduct } from '../../data-access/product'
import ListItem from '@/components/ListItem'
import List from '@/components/ListUnordered'
export default async function SearchProducts({searchParams}:{searchParams?:{query?:string}}){
        const products:Product[] = await getProduct() || [];
    
        if (!products || products.length === 0){
            return <div className="w-1/3 text-center mx-auto p-10 text-lg text-red-300">No products found</div>
        }
    const query = searchParams?.query || "";
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