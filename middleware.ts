import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyToken } from "./app/lib/auth"

export async function middleware(request: NextRequest) {
    console.log("Middleware running...")
    const token = request.cookies.get("auth-token")?.value
    const path = request.nextUrl.pathname

    // Check if the user is authenticated
    const isAuthenticated = token && (await verifyToken(token))

    // Auth page paths
    const isAuthPage = path === "/dashboard/login" || path === "/dashboard/signup"

    // If user is authenticated and trying to access auth pages, redirect to dashboard
    if (isAuthenticated && isAuthPage) {
        return NextResponse.redirect(new URL("/app/dashboard", request.url))
    }

    // Continue with the request
    return NextResponse.next()
}

// Only run middleware on specific paths
export const config = {
    matcher: ["/dashboard/login", "/dashboard/signup", "/dashboard"],
}