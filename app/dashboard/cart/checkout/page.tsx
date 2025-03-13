"use client"
import React, { useEffect } from 'react'
import { getCartTotal } from '@/app/lib/cartTotal'
import { useProductStore } from '@/app/lib/store'

function Page() {
  const cart = useProductStore((state) => state.cart)
  let totalAmount = getCartTotal(cart);

  return (
    <main className="max-w-6xl mx-auto text-white p-10 text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 ">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold">Payment Succcessful</h1>
        <h2 className="text-2xl">
          You have completed your purchase of <span className="font-bold">Ksh: {totalAmount}</span>
        </h2>
      </div>
    </main>
  )
}

export default Page