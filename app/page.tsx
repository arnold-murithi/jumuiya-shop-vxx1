"use client"
import Image from "next/image";
import dashboardImage from "@/public/interior.jpg"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Modal from "@/components/modal";
import { useState } from "react";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [registerModal, setRegisterModal] = useState<boolean>(false)
  
  const handleCloseModal = () =>{
    setShowModal(false)
  }
  const handleRegisterModal = () =>{
    setRegisterModal(false)
  }
  return (
    <main className="min-h-screen">
      <div className="w-full h-80 relative">
      <div className=" bg-blue-500 w-full p-3 flex justify-center  font-semibold text-white  
      place-items-center border-b-[1px] border-white/40">
      <div className="mr-8 float-start">
        <p className="">Logo</p>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-6">
            <Link href="./kids">
            <li className="cursor-pointer">
            <p>Kids</p>
          </li>
            </Link>
          <li className="cursor-pointer">
            <p>New & featured</p>
          </li>
          <li className="cursor-pointer">
            <p>Men</p>
          </li>
          <li className="cursor-pointer">
            <p>Women</p>
          </li>
            </ul>
          </div>
          <div className="flex pl-8 gap-6 ml-5 place-items-stretch">
          <form className="flex w-full flex-1">
          <Input type="search"
          placeholder="Search products...."
          className="p-2 ml-7 mr-5 placeholder:italic placeholder:text-slate-400 flex-1 w-72 rounded-full"/>
          <button>
            <CiSearch className="text-3xl text-white bg-gray-400 rounded-full"/>
          </button>
          </form>
          <div>
          <Button
          onClick={() => setShowModal(true)} 
          className="ml-6" variant="secondary">Login</Button>
          </div>
          <div>
          <Button
          onClick={()=> setRegisterModal(true)}
           className="ml-6 bg-sky-800">Register</Button>
          </div>
          </div>
          <BsCart3 className="ml-8 float-right text-2xl" />
          <DropdownMenu>
          <DropdownMenuTrigger>
          <CgProfile className="text-5xl ml-8 pl-4"/>
          </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Orders</DropdownMenuItem>
    <DropdownMenuItem>
      <Link href="/admin">Admin</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
          </DropdownMenu>
        </div> 
      <Image src={dashboardImage}
      className="w-full h-full object-cover absolute"
      alt=""
      />
      <div className="ml-5 ">
        <h1 className="text-white text-9xl relative font-bold p-40">ONLINE STORE</h1>
        </div>
      </div>
      <div>
        <div>
          <div>
             <div className=" mt-7">
                <h1 className="font-bold">Hello world</h1>
             </div>
          </div>
          <div className="flex mx-24 ">
            <div className="shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
            <h1 className="mt-8">Hellooo!!!</h1>
          </div>
          <div className="shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
            <h1 className="mt-8">Hellooo!!!</h1>
          </div>
          <div className="shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
            <h1 className="mt-8">Hellooo!!!</h1>
          </div>
          <div className="shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
            <h1 className="mt-8">Hellooo!!!</h1>
          </div>
          </div>
        </div>
       </div>
       <Modal isVisible={showModal} onClose={handleCloseModal}>
        <div>
          <Login/>
        </div>
       </Modal>
      <Modal isVisible={registerModal} onClose={handleRegisterModal}>
          <div>
          <Signup/>
          </div>
      </Modal>
    </main>
  );
}
