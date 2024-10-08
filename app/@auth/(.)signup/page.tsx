"use client"
import Modal from '@/components/modal'
import Signup from '@/components/SignupForm'
import React from 'react'
import { useRouter } from 'next/navigation'

const router = useRouter()

function page() {
  return (
    <Modal onClose={() =>{router.push("/")}}>
      <Signup/>
    </Modal>
  )
}

export default page