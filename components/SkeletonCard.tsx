import React from 'react'
import { Skeleton } from './ui/skeleton'
function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-1/3 rounded-xl"/>
        <Skeleton className="h-[125px] w-1/3 rounded-xl"/>
        <Skeleton className="h-[125px] w-1/3 rounded-xl"/>
    </div>
  )
}

export default SkeletonCard