import { Product } from '@prisma/client'
import React from 'react'
import { Button } from './ui/button'
import { useProductStore } from '@/app/lib/store'

function RemoveFromCart({product}:{product: Product}) {
    const RemoveFromCart = useProductStore((state) => state.removeFromCart)

  return (
    <Button onClick={() =>{ RemoveFromCart(product.id)}} className="bg-sky-600 w-1/3">-</Button>
  )
}

export default RemoveFromCart