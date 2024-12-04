import { Prisma, Product } from '@prisma/client'
import React from 'react'
import prisma from '../../db/db'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AddToCart from '@/components/AddToCart';
import { getProduct } from '../../data-access/product'
import ListItem from '@/components/ListItem'
import List from '@/components/ListUnordered'



export default async function Kids({searchParams}:{searchParams?:{query?:string}}) {
const query = searchParams?.query || ""
  const products:Product[] = await getProduct()
  const filteredProducts = Array.isArray(products) ? products.filter((product) =>{
    return product.name.toLowerCase().includes(query.toLowerCase())
  }):[]
  return (
   <>
       <h1 className="font-semibold text-2xl">Kids Product Page</h1>
   <List>
    {Array.isArray(products) && filteredProducts.map((product) =>(
      <ListItem key={product.id} product={product}/>
    ))}
   </List>
   </>
  )
}
