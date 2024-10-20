import { Prisma, Product } from '@prisma/client'
import React from 'react'
import prisma from '../../db/db'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import AddToCart from '@/components/AddToCart';
import { getProduct } from '../../data-access/product'



async function page() {

  const products:Product[] =await getProduct()
  return (
    <div>
      <h1 className="font-semibold text-2xl">Kids Product Page</h1>
      <div className="flex flex-wrap justify-between">
          <ul className="m-2 flex flex-wrap justify-between h-auto items-center space-y-4">
          {products.map((product) =>(
            <li key={product.id} className="flex flex-col items-center h-[450px] justify-between bg-gray-50">
              <Image
              src={product.imagePath}
              width={200}
              height={200}
              alt={product.name}
              className='object-fill'
              />
              <p className="font-semibold text-xl">{product.name}</p>
              <p className="text-gray-950 text-lg">Ksh:{product.priceInCents}</p>
              <p className='text-gray-600'>{product.description}</p>
              <AddToCart product={product}/>
            </li>
                    ))}
          </ul>
      </div>
    </div>
  )
}

export default page