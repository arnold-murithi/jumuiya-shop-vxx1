"use client"
import React, { useEffect } from 'react'
import {loadStripe} from "@stripe/stripe-js"
import { getCartTotal } from '@/app/lib/cartTotal'
import { useProductStore } from '@/app/lib/store'


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined){
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined")
  }
  
  
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function page() {
  const cart = useProductStore((state) => state.cart)
  let totalAmount = getCartTotal(cart);

  useEffect(() =>{
    const query = new URLSearchParams(window.location.search)
    if(query.get('success')){
      console.log('Order palced! You will receive an email confirmation.')
    }
    if(query.get('cancelled')){
      console.log('Order canceled -- continue to shop around and checkout when you are ready')
    }
  },[])
  return (
    <main className="max-w-6xl mx-auto text-white p-10 text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 ">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold">Arnold</h1>
        <h2 className="text-2xl">
          complete your purchase of <span className="font-bold">Ksh: {totalAmount}</span>
        </h2>
      </div>
    </main>
  )
}

export default page