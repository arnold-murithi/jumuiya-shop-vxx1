import prisma from "@/app/db/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises"

export async function GET(req: NextRequest, { params: { id } }: { params: { id: string } }) {

    if (!id) {
        return notFound()
    }

    try {
        const product = await prisma.product.findUnique({
            where: { id },
            select: {
                filePath: true,
                name: true
            }
        })

    if (product === null)
        return notFound()

    try {
        const { size } = await fs.stat(product.filePath)
    const file = await fs.readFile(product.filePath)
    const extension = product.filePath.split(".").pop()

    return new NextResponse(file, {//headers to explain what the file is
        headers: {
            "Content-Disposition": `attachment; filename="${product.name}.${extension}"`,//define what the file name is.
            "Content-length": size.toString(),//to tell the browser how long the file is so that it can give the download estimates
        },
    })
    } catch (error) {
        console.error(`Error reading file: ${product.filePath}`);
        return new NextResponse("Error reading file", {status:500}) 
    }
} catch (error) {
  console.error("Database query error", error);
  return new NextResponse("Database error", {status:500});      
}
}