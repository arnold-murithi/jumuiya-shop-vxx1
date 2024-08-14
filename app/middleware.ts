import { isValidPassword } from "@/lib/isValidPassword";
import { NextRequest, NextResponse } from "next/server";

export async function midddlware(req:NextRequest){
    if ((await isAuthenticated(req))===false){
        return new NextResponse("Unauthorized",{
            status:401,
            headers:{
                "WWW-Authenticate":"Basic",
            }
        })
    }
}

async function isAuthenticated(req:NextRequest){

    const authHeader = req.headers.get("authorization") || req.headers.get("Authorization")
    if (authHeader === null)
        return false
        //[1] get the second value, we are converting it to base 64 because it is encrypted i.e convert it to a buffer based on base 64
        const [username, password] = Buffer.from(authHeader.split(" ")[1],"base64").toString().split(":")
        console.log(username, password)
        isValidPassword(password, "asderwrgwrg")

       //const username = process.env.ADMIN_USERNAME &&(await isValidPassword(password, process.env.HASHED_ADMIN_PASSWORD as string))
}   


export const config = {
    matcher: '/admin/:path*',
}