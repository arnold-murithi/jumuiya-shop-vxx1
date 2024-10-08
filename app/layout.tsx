import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import React from "react";
import { DashboardNavLink, DashboardNavbar } from "@/components/DashboardNavbar";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import SearchButton from "@/components/SearchButton";
import { BsCart3 } from "react-icons/bs";
import Profile from "@/components/profile";
import { SessionProvider } from "next-auth/react";
import SigninButton from "@/components/SigninButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={cn(inter.variable)}> 
      <DashboardNavbar>
        <DashboardNavLink href="/kids">Kids</DashboardNavLink>
        <DashboardNavLink href="/NewAndFeatured">New & featured</DashboardNavLink>
        <DashboardNavLink href="/women">Women</DashboardNavLink>
        <DashboardNavLink href="/men">Men</DashboardNavLink>
        <Input type="search" placeholder="Search products...." className="p-2 ml-7 mr-5 placeholder:italic placeholder:text-slate-400 flex-1 w-72 rounded-full"/>
          <div className="space-x-3 ">
          <SearchButton/>
          <Button>
            <Link href="./login">Login</Link>
          </Button>
          <Button>
            <Link href="./signup">Signup</Link>
          </Button>
          </div>
          <BsCart3 className="ml-8 float-right text-2xl" />
          <Profile/>
        </DashboardNavbar>
        {/*<div>{auth}</div>*/}
        <div>
        {children}
        </div>
      </body>  
    </html>
  );
}
