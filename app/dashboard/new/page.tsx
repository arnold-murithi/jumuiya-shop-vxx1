import React, { Suspense } from 'react'
import SearchProducts from './SearchProducts'
import Loading from '../loading'

export default async function Kids() {
 await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
   <>
   <Suspense fallback={<Loading/>}>
     <SearchProducts/>
   </Suspense>
   </>
  )
}
