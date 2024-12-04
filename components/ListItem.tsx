import { Product } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import AddToCart from './AddToCart'

function ListItem({product}:{product:Product}) {
  return (
    <div className="flex font-sans items-center justify-center">
      <div className="flex-auto p-4 border-r-0 ml-2">
        <div className="min-h-full w-64 p-4 m-4 bg-gray-50 rounded-md drop-shadow-md">
          <div className="flex flex-wrap">
            <div className="flex flex-col m-2 space-y-0 place-items-center">
            <Image src={product.imagePath} width={200} height={200}
            style={{
              maxWidth:'70%',
              height: '60%'
            }}
             alt=""/>
            <h1 className="flex-auto font-medium text-slate-900">
              {product.name}
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl ">
              Ksh:{product.priceInCents}
            </div>
            </div>
            <div className="text-sm font-medium text-slate-400">
              In stock
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="flex space-x-2 text-sm font-bold">
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s"/>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">XS</div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s"/>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">S</div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s"/>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">M</div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s"/>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">L</div>
              </label>
              <label>
                <input className="sr-only peer" name="size" type="radio" value="s"/>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">XL</div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium items-center justify-center">
            <div className="flex-auto flex space-x-4">
              <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                Buy now
              </button>
              <AddToCart product={product}/>
            </div>
            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-50" type="button" aria-label='like'>
              <svg width="20" height="20" fill='currentColor' aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate=500">Free delivery</p>
          </div>
        </div>
    </div>
  )
}

export default ListItem