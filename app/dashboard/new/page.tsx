import { Prisma, Product } from '@prisma/client'
import React from 'react'
import { getProduct } from '../../data-access/product'
import ListItem from '@/components/ListItem'
import List from '@/components/ListUnordered'

export default async function Kids({searchParams}:{searchParams?:{query?:string}}) {
const query = searchParams?.query || ""
  const products:Product[] = await getProduct();
  const filteredProducts = Array.isArray(products) ? products.filter((product) =>{
    return product.name.toLowerCase().includes(query.toLowerCase())
  }):[]
  return (
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
