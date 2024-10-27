import React from 'react'
import { useProductStore } from '../lib/store'

function page() {
  const cart = useProductStore((state) => state.cart);
  return (
    <div>
      <h1>Welcome to cart</h1>
    </div>
  )
}

export default page