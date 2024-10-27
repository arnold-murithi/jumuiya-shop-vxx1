import prisma from "../db/db";

export async function getProduct() {
    return await prisma.product.findMany()
}