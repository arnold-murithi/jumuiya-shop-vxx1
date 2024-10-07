"use client"
import {useSession } from "next-auth/react"
import Link from "next/link";
import { Button } from "./ui/button";
import Modal from "./modal";
import { useState } from "react";

export default function SigninButton(){

    const {data:session} = useSession();

//If the session existed and the session has a user print the name of the user in a p tag.
    return(
        <div className="flex items-center gap-2">
            {session && session.user ?
            (<>
            <p className="text-2xl text-teal-100">{session.user.name}</p>
            <Button variant="outline">
            <Link href={"/api/auth/signout"}>Sign Out</Link>
            </Button>
            </>):(<>
            <Button className="hover:text-sky-500 
            transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <Link href={"/api/auth/signin"}>Sign In</Link>
            </Button>
            <Button>
            <link href={"/signup"}>Signup</link>
            </Button>
            </>)
            }
        </div>
    )
}