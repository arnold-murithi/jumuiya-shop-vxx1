"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, User } from "lucide-react"
import CartComponent from "./CartComponent"
import Profile from "./profile"
import SearchPage from "./SearchPage"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/dashboard/new-featured" className="hover:bg-blue-600 px-3 py-2 rounded-md">
                New & Featured
              </Link>
              <Link href="/dashboard/kids" className="hover:bg-blue-600 px-3 py-2 rounded-md">
                Kids
              </Link>
              <Link href="/dashboard/men" className="hover:bg-blue-600 px-3 py-2 rounded-md">
                Men
              </Link>
              <Link href="/dashboard/women" className="hover:bg-blue-600 px-3 py-2 rounded-md">
                Women
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <SearchPage />
              </div>
              <button className="md:hidden ml-3 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md">Login</button>
              <button className="md:hidden ml-3 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md">Sign Up</button>
              {/*<User className="ml-3 h-6 w-6" />*/}
              <CartComponent data-test="cart-component"/>
              <Profile/>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/dashboard/new-featured" className="block hover:bg-blue-600 px-3 py-2 rounded-md">
              New & Featured
            </Link>
            <Link href="/dashboard/kids" className="block hover:bg-blue-600 px-3 py-2 rounded-md">
              Kids
            </Link>
            <Link href="/dashboard/men" className="block hover:bg-blue-600 px-3 py-2 rounded-md">
              Men
            </Link>
            <Link href="/dashboard/women" className="block hover:bg-blue-600 px-3 py-2 rounded-md">
              Women
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-600">
            <div className="px-2 space-y-1">
              <div className="relative">
                <SearchPage/>
              </div>
              <div className="flex items-center px-3 py-2">
                <div className="items-center justify-items-center">
                <CartComponent data-test="cart-component"/>
                <span className="font-semibold font-serif tracking-normal">Cart</span>
                </div>
                <div className="flex flex-col justify-items-center align-items-center">
                <Profile/>
                <span className="ml-10 font-semibold font-serif">Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

