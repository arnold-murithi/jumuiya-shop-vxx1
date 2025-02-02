"use client"
import React from 'react'
import { useProductStore } from '@/app/lib/store'
import { getCartTotal } from '@/app/lib/cartTotal'
import { BsCart3 } from 'react-icons/bs';
import Link from 'next/link';

function CartComponent() {
    const cart = useProductStore((state) => state.cart);
    const total = getCartTotal(cart)
  return (
    <div className="flex flex-col items-center ml-1">
        {cart.length > 0 ? <p className="text-yellow-200">{cart.length} items</p>: "no items"}
        <Link href="/dashboard/cart">
        <BsCart3 className="ml-6 float-right text-2xl" />
        </Link>
        <p className="ml-2 text-yellow-200">kes:{total}</p>  
    </div>
  )
}

export default CartComponent