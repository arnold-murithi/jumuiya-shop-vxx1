import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export function getJwtSecretKey() {
    const secret = process.env.JWT_SECRET_KEY

    if (!secret) {
        throw new Error("JWT_SECRET_KEY is not set")
    }

    return new TextEncoder().encode(secret)
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey())
        return payload
    } catch (error) {
        return null
    }
}

export async function getSession() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("auth-token")

    if (!token) {
        return null
    }

    const payload = await verifyToken(token.value)

    if (!payload) {
        return null
    }

    return payload as {
        user: {
            id: string
            name: string
            email: string
        }
        expires: string
    }
}