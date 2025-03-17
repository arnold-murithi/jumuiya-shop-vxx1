import prisma from "../db/db";
import Basket from "@/components/Basket";

export async function getProduct() {
    return await prisma.product.findMany()
}
export async function getFiveProducts() {
    return await prisma.product.findMany({
        take: 5,
    })
}
export async function getUser() {
    return await prisma.user.findFirst()
}