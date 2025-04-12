import React, { Suspense } from 'react'
import SearchProducts from './SearchProducts'
import Loading from '../loading'

export default async function Kids() {
  return (
   <Suspense fallback={<Loading/>}>
     <SearchProducts/>
   </Suspense>
  )
}
