import { NextResponse } from "next/server"
import { signupSchema } from "@/lib/schema";
import prisma from "@/app/db/db";
import * as bcrypt from "bcrypt"
import { redirect } from "next/navigation";

//proceses an incoming request from signup form

export async function POST(request: Request) {
    //data will be sent to this route, Grab the data through the body variable

    const body: unknown = await request.json()

    //validate the client data
    const result = signupSchema.safeParse(body);
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        })
    }

    const data = result.data;

    const existingUser = await prisma.user.findUnique({
        where: {
            email: data?.email
        }
    })

    if (existingUser) {
        return NextResponse.json({ errors: { email: "Email already in use" } }, { status: 409 })
    }
    await prisma.user.create({
        data: {
            name: data?.name as string,
            email: data?.email as string,
            password: await bcrypt.hash(data?.password as string, 10)
        },
    })

    return NextResponse.redirect('/dashboard')

    // return NextResponse.json(
    //     Object.keys(zodErrors).length > 0 ? { errors: zodErrors } : { success: true }//check if the object is empty or not by using Object.keys
    // )
}