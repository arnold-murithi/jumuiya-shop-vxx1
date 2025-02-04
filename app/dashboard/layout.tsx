"use client"
import { Inter } from "next/font/google";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function ExcludeCheckoutl({children}:
  {children:React.ReactNode}){
    const pathname = usePathname()
    const renderHeader = pathname !== '/dashboard/cart/checkout'
return(
  <div>
    {renderHeader && <RootLayout/>}
    <main>{children}</main>
  </div>
)
  }

function RootLayout() {
  
  return (
    <>
     <Navbar/>
    </>
  );
}

