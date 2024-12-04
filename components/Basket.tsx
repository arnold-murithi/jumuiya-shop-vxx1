"use client"
import React from 'react'
import { useProductStore } from '@/app/lib/store'
import { getConsolidatedCart } from '@/app/lib/consolidateCart'
import { getCartTotal } from '@/app/lib/cartTotal'
import Image from 'next/image'
import AddToCart from './AddToCart'
import { Button } from './ui/button'
import Link from 'next/link'
import { createCheckoutSession } from '@/app/api/checkout_session'
import { Metadata } from '@/app/api/checkout_session'
// import { getUsers } from '@/app/data-access/product'
import { User } from '@prisma/client'

//props are imported from cart logic
function Basket({user}:{user:User}) {
    const cart = useProductStore((state) => state.cart)
    const total = getCartTotal(cart)
    const consolidatedCart = getConsolidatedCart(cart)
    console.log(consolidatedCart)

    const handleCheckout = async () =>{
      // const user = await getUsers()
      try {
        const metadata: Metadata = {
          orderNumber: crypto.randomUUID(),
          customerName: user?.name as string,
          customerEmail: user?.email as string,
          userId: user?.id as string,
        }
        const checkoutUrl = await createCheckoutSession(consolidatedCart, metadata)
        
        if (checkoutUrl){
          window.location.href = checkoutUrl;
        }
      } catch (error) {
        console.error("Error creating checkout session", error)
        throw error
      }
    }
  return (
    <div className="max-w-7xl mx-auto">
      {consolidatedCart.length === 0 ? (
        <p>The cart is empty</p>
      ):(
        <ul className='space-y-5 divide-y-2 mt-2 mx-auto'>
          {consolidatedCart.map((item) =>(
            <li className="flex" key={item.id}>
              <Image src={item.imagePath} 
              style={{padding:'2px'}}
              width={100} height={100} alt=''/>
              <div className=' ml-4 flex'>
                <div className="space-y-4 w-48">
                  <p className="line-clamp-2 font-semibold text-2xl text-slate-800">{item.name}</p>
                  <p className="line-clamp-5 font-normal text-base text-slate-500">{item.description}</p>
                  <p className="line-clamp-5 font-normal text-base text-slate-600">Quantity: {item.quantity}</p>
                </div>
                <div className="ml-5 flex flex-col items-center space-y-4">
                  <AddToCart product={item}/>
                  <p className="text-sm font-bold text-slate-800">ksh:{total}</p>
                </div>
              </div>
            </li>
          ))}
           <Button onClick={handleCheckout} className="w-full bg-purple-950 text-lg font-sans mt-4">
                 Checkout (Ksh:{total})
           </Button>
        </ul>
      )}
    </div>
  )
}

export default Basket