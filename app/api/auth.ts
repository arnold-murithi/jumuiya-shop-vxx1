import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "../db/db"
import bcrypt from "bcrypt"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "email",
                    type: "text",
                    placeholder: "Enter your email"
                },
                password: {
                    label: "password",
                    type: "password",
                    placeholder: "Enter your password"
                },
            },
            authorize: async (credentials) => {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })

                if (!user) throw new Error("No user found")
                //trying to see what this line of code will give
                console.log(user);

                if (!credentials.password) throw new Error("Please provide your password")

                const isPasswordCorrect = await bcrypt.compare(credentials.password as string, user.password)

                if (!isPasswordCorrect) throw new Error("Email or password is incorrect")

                const { password, ...userWithoutPass } = user;
                return userWithoutPass
            }
        })
    ],
    callbacks: {}
})