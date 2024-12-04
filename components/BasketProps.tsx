import { Prisma } from '@prisma/client'
import React from 'react'
import Basket from './Basket'
import prisma from '@/app/db/db'

async function BasketProps() {
    const user = await prisma.user.findFirst()
  return (
    <>
    <Basket user={user!}/>
    </>
  )
}

export default BasketProps