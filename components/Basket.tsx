"use client"
import React from 'react'
import { useProductStore } from '@/app/lib/store'
import { getConsolidatedCart } from '@/app/lib/consolidateCart'

function Basket() {
    const cart = useProductStore((state) => state.cart)
    const consolidatedCart = getConsolidatedCart(cart)
    console.log(consolidatedCart)
  return (
    <div>Basket</div>
  )
}

export default Basket