"use client"
import Login from '@/components/LoginForm'
import Modal from '@/components/modal'
import { useRouter } from 'next/navigation'
import React from 'react'

const router = useRouter()

function page() {
  return (
    <Modal onClose={() =>{router.push("/")}}>
      <Login/>
    </Modal>
  )
}

export default page