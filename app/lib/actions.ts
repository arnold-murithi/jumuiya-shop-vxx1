"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { SignJWT } from "jose"
import { z } from "zod"
import bcrypt from "bcrypt"
// import { db } from "@/app/db/db"
import { getJwtSecretKey } from "./auth"
import prisma from "@/app/db/db"


const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
})

export async function login(formData: z.infer<typeof loginSchema>) {
    const cookieStore = await cookies();
    const validatedFields = loginSchema.safeParse(formData)

    if (!validatedFields.success) {
        return { success: false, error: "Invalid fields" }
    }

    const { email, password } = validatedFields.data

    try {
        // Find user by email
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return { success: false, error: "Invalid email or password" }
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password as string)

        if (!passwordMatch) {
            return { success: false, error: "Invalid email or password" }
        }

        // Create session
        const session = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        }

        // Create JWT token
        const token = await new SignJWT(session)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("30d")
            .sign(getJwtSecretKey())

        // Set cookie
        cookieStore.set({
            name: "auth-token",
            value: token,
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            maxAge: 30 * 24 * 60 * 60, // 30 days
        })

        return { success: true }
    } catch (error) {
        console.error("Login error:", error)
        return { success: false, error: "Something went wrong" }
    }
}

export async function register(formData: z.infer<typeof registerSchema>) {
    const cookieStore = await cookies();
    const validatedFields = registerSchema.safeParse(formData)

    if (!validatedFields.success) {
        return { success: false, error: "Invalid fields" }
    }

    const { name, email, password } = validatedFields.data

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return { success: false, error: "Email already in use" }
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create user
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        // Create session
        // const session = {
        //     user: {
        //         id: user.id,
        //         name: user.name,
        //         email: user.email,
        //     },
        //     expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        // }

        // // Create JWT token
        // const token = await new SignJWT(session)
        //     .setProtectedHeader({ alg: "HS256" })
        //     .setIssuedAt()
        //     .setExpirationTime("30d")
        //     .sign(getJwtSecretKey())

        // // Set cookie
        // cookieStore.set({
        //     name: "auth-token",
        //     value: token,
        //     httpOnly: true,
        //     path: "/",
        //     secure: process.env.NODE_ENV === "production",
        //     maxAge: 30 * 24 * 60 * 60, // 30 days
        // })

        return { success: true, message: "Account created successfully" }
    } catch (error) {
        console.error("Registration error:", error)
        return { success: false, error: "Something went wrong" }
    }
}

export async function logout() {
    (await cookies()).delete("auth-token")
    redirect("/auth/login")
}