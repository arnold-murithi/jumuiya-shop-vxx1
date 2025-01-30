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
     <DashboardNavbar>
        <DashboardNavLink data-test="kids-route" href="/dashboard/kids">Kids</DashboardNavLink>
        <DashboardNavLink href="/dashboard/NewAndFeatured">New & featured</DashboardNavLink>
        <DashboardNavLink href="/women">Women</DashboardNavLink>
        <DashboardNavLink href="/dashboard/men">Men</DashboardNavLink>
       <div> <SearchPage/></div>
        {/* <Input type="search" placeholder="Search products...." className="p-2 ml-7 mr-5 placeholder:italic placeholder:text-slate-400 flex-1 w-72 rounded-full"/> */}

          <div className="space-x-3 md:hidden sm:hidden lg:flex">
          {/*<SearchButton/>*/}
          <button className=" bg-gray-800 p-2 rounded-lg font-sans subpixel-antialiased">
            <Link href="/dashboard/login">Login</Link>
          </button>
          <button className=" bg-gray-800 p-2 rounded-lg font-sans subpixel-antialiased">
            <Link href="/dashboard/signup">Signup</Link>
          </button>
          </div>
          <CartComponent data-test="cart-component"/>
          <Profile/>
        </DashboardNavbar>
    </>
  );
}

