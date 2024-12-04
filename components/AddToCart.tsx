"use client"
import { Product } from '@prisma/client'
import { IoAdd } from "react-icons/io5";
import { useProductStore } from '@/app/lib/store';
import React from 'react'
import { Button } from './ui/button';
import RemoveFromCart from './RemoveFromCart';

function AddToCart ({product}:{product:Product}) {
  const cart = useProductStore((state) => state.cart);
  const addToCart = useProductStore((state) => state.addToCart)
  const itemsInCart = cart.length
  

  if (itemsInCart > 0){
     return(
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product}/>
        <span>{itemsInCart}</span>
        <Button 
      onClick={() => addToCart(product)}
      className="bg-sky-600 w-1/3">
      <IoAdd />
    </Button>
      </div>
     )
  }
  
  return (
    <button data-test="add-to-cart"
    onClick={() => addToCart(product)}
    className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900 bg-slate-300">
        <span className="text-lg -tracking-2">+Add</span>
    </button>
  )
}

export default AddToCart