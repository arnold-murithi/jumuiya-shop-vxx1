"use client"
import Image from "next/image";
import dashboardImage from "@/public/interior.jpg"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Modal from "@/components/modal";
import { useState } from "react";
import Signup from "@/components/SignupForm";
import Login from "@/components/LoginForm";
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
import { MailIcon } from "lucide-react";




export default function Home() {
  // const [showModal, setShowModal] = useState<boolean>(false)
  // const [registerModal, setRegisterModal] = useState<boolean>(false) 
  
  // const handleCloseModal = () =>{
  //   setShowModal(false)
  // }
  // const handleRegisterModal = () =>{
  //   setRegisterModal(false)
  // }
  return (
    <div className="min-h-screen">
     <Image priority={false} src={dashboardImage}
      className="w-full h-96 object-cover absolute "
      alt=""
      />
      <div className="ml-5 ">
        <h1 className="text-white text-9xl relative font-bold p-40">ONLINE STORE</h1>
        </div>
        <div className="min-h-64 bg-red-400">
          <div className="flex mx-24 ms-0.5 me-0">
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
          <div className="shadow-xl border-black border-1 w-64 h-44 mt-10 ml-3 rounded-xl p-4">
            <h1 className="mt-8">Hellooo!!!</h1>
          </div>
          </div>
        </div>
    </div>
  );
}
