import { Product } from '@prisma/client'
import { getProduct } from '../../data-access/product'

import React, { Suspense } from 'react'
import SearchProducts from './SearchProducts'
import Loading from '../loading'

export default async function Kids() {
  const products:Product[] = await getProduct() || [];
  if (!products || products.length === 0){
    return <div className="w-full p-10 max-w-7xl mx-auto text-center text-red-300">No products found</div>  
  }
  return (
   <Suspense fallback={<Loading/>}>
     <SearchProducts products={products}/>
   </Suspense>
  )
}
