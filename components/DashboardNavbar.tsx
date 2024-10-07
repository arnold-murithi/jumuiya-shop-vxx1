"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Component, ComponentProps, ReactNode } from "react"

export function DashboardNavbar({children}:{children:ReactNode}){
    return <nav className="bg-blue-500 w-full p-3 flex justify-center  font-semibold text-white place-items-center border-b-[1px] border-white/40">
        {children}
    </nav>
}

export function DashboardNavLink(props:Omit<ComponentProps<typeof Link>, "className">){
    const pathname = usePathname()
    return <Link{...props} className={cn("p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground", pathname == props.href && "bg-background text-foreground")}/>
}