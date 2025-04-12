import { Suspense } from 'react'
import CartPage from '@/components/CartPage'
import SkeletonCard from '@/components/SkeletonCard'

async function page() {

  return (
    <Suspense fallback={<SkeletonCard/>}>
      <CartPage/>
    </Suspense>
  )
}

export default page