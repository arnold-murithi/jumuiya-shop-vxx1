"use client"
import React from 'react'
import { useProductStore } from '@/app/lib/store'
import { getConsolidatedCart } from '@/app/lib/consolidateCart'
import { getCartTotal } from '@/app/lib/cartTotal'
import Image from 'next/image'
import AddToCart from './AddToCart'
import { Button } from './ui/button'

function Basket() {
    const cart = useProductStore((state) => state.cart)
    const total = getCartTotal(cart)
    const consolidatedCart = getConsolidatedCart(cart)
    console.log(consolidatedCart)
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
           <Button className="w-full bg-purple-950 text-lg font-sans">Checkout (Ksh:{total})</Button>
        </ul>
      )}
    </div>
  )
}

export default Basket