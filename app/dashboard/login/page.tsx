import React, { Suspense } from 'react'
import Login from '@/components/LoginForm'
import SkeletonCard from '@/components/SkeletonCard'

export default function page() {
  return (
    <Suspense fallback={<SkeletonCard/>}>
      <Login/>
    </Suspense>
  )
}
