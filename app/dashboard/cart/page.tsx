import Basket from '@/components/Basket'
import React, { Suspense } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { getUser } from '@/app/data-access/product'
import SkeletonCard from '@/components/SkeletonCard'

async function page() {
  const user = await getUser()
  return (
    <div className="w-full p-10 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <div className='text-3xl w-10 h-10 '><BsCart3/></div>
      <h1 className="font-semibold text-3xl">Welcome to cart</h1>
      </div>
      <p className="text-large font-normal">Review the items in the cart and checkout when ready </p>
      <Suspense fallback={<SkeletonCard/>}>
      <Basket user={user!}/>
      </Suspense>
    </div>
  )
}

export default page