"use client"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { DashboardNavLink, DashboardNavbar } from "@/components/DashboardNavbar";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import SearchButton from "@/components/SearchButton";
import Profile from "@/components/profile";
import SigninButton from "@/components/SigninButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartComponent from "@/components/CartComponent";
import React from "react";
import { usePathname } from "next/navigation";
import SearchPage from "@/components/SearchPage";
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

