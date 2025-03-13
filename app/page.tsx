"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Page() {
  const router = useRouter();
  useEffect(() =>{
    router.push("/dashboard")
  },[router])
  return null
}

export default Page