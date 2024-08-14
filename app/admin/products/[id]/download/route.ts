import prisma from "@/app/db/db";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises"

export async function Get(req:NextRequest, {params:{id}}:{params:{id:string}}){
    
    const product = await prisma.product.findUnique({
        where:{id},
        select:{
            filePath:true,
            name:true
        }
    })

    if(product === null )
        return notFound()

    const {size} = await fs.stat(product.filePath)
    const file = await fs.readFile(product.filePath)
    const extension = product.filePath.split(".").pop()//split on the period and get the last element using pop. This will give the file extension at the very end

    return new NextResponse(file, {//headers to explain what the file is
        headers:{ 
            "Content-Disposition": `attachment; filename="${product.name}.${extension}"`,//define what the file name is.
            "Content-length": size.toString(),//to tell the browser how long the file is so that it can give the download estimates
        },
    })
}