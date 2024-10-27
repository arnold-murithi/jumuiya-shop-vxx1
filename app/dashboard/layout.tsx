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


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });


export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  
  return (
    <>
     <DashboardNavbar>
        <DashboardNavLink data-test="kids-route" href="/dashboard/kids">Kids</DashboardNavLink>
        <DashboardNavLink href="/dashboard/NewAndFeatured">New & featured</DashboardNavLink>
        <DashboardNavLink href="/dashboard/women">Women</DashboardNavLink>
        <DashboardNavLink href="/dashboard/men">Men</DashboardNavLink>
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
          <CartComponent/>
          <Profile/>
        </DashboardNavbar>
        <div>
        {children}
        </div>
    </>
  );
}

