import { Prisma, Product } from '@prisma/client'
import React from 'react'
import prisma from '../../db/db'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AddToCart from '@/components/AddToCart';
import { getProduct } from '../../data-access/product'
import ListItem from '@/components/ListItem'
import List from '@/components/ListUnordered'



export default async function Kids() {

  const products:Product[] = await getProduct()
  return (
   <>
       <h1 className="font-semibold text-2xl">Kids Product Page</h1>
   <List>
    {products.map((product) =>(
      <ListItem key={product.id} product={product}/>
    ))}
   </List>
   </>
  )
}
