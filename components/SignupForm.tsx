"use client"
import { FcGoogle } from 'react-icons/fc'
import { FiEye } from "react-icons/fi";
import { useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { signupSchema } from '@/lib/schema'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register as registerUser } from '@/app/lib/actions';



//infer type
type SignupSchema = z.infer<typeof signupSchema>


export default function Signup() {
const router = useRouter();
const [isLoading, setIsLoading] = useState(false)
const  [error, setError] = useState<string | null>(null)

  const {register, handleSubmit,reset, 
    formState:{errors, isSubmitting},
    } = useForm<SignupSchema>({
      resolver: zodResolver(signupSchema),
      defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    })
    

  const onSubmit = async(data:SignupSchema) =>{
   setIsLoading(true)
   setError(null)

   try {
   const result = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })
   
   if (result.success){
     router.push("/dashboard/login?registered=true")
    router.refresh();
   }else{
    setError(result.error || "Something went wrong. Please try again.")
   } 
   //console.log(responseData)
   } catch (error) {
    setError("An error occurred. please try again")
   } finally {
    setIsLoading(false)
   }
  }
   
  return (
    <section className=" flex flex-col h-full items-center mx-auto">

    <div className="bg-inherit hidden w-full  h-full mx-auto ">
      {/*<Image src="bg.jpg" alt="" className="w-full h-full object-cover"/>*/}
    </div>
  
    <div className="lg:w-2/5 sm:w-1/2 flex items-center justify-center">
  
      <div className="w-full h-full">
  
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-0">Create an account</h1>
  
        <form className="mt-6 relative" onSubmit={handleSubmit(onSubmit)} method="POST">
        <div>
            <label className="block text-slate-700 font-medium font-serif">Username</label>
            <input 
            {...register("name")}
            type="name" name="name" 
            placeholder="Enter your username" 
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
            focus:bg-white focus:outline-none" />
          </div>
          {errors.name && <p className="text-red-400">{`${errors.name?.message}`}</p>}
          <div>
            <label className="block text-slate-700 font-medium font-serif">Email Address</label>
            <input 
            {...register("email")}
            type="email" name="email" 
            placeholder="Enter Email Address" 
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
            focus:bg-white focus:outline-none" />
          </div>
          {errors.email && <p className="text-red-400">{`${errors.email?.message}`}</p>}
          <div className="mt-4">
            <label className = "block text-slate-700 font-medium font-serif">Password</label>
            <input
            {...register("password")}
            type = "password" placeholder="Enter Password"  
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              min-w-64 focus:bg-white focus:outline-none"/>
          </div>
          {errors.password && <p className="text-red-400">{`${errors.password.message}`}</p>}
          <div className="pt-4">
            <label className="block text-slate-700 font-medium font-serif">Confirm Password</label>
            <input 
            {...register("confirmPassword")}  
            type = "password" placeholder="Confirm your password" 
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
            focus:bg-white focus:outline-none" />
          </div>
          {errors.confirmPassword && <p className="text-red-400">{`${errors.confirmPassword.message}`}</p>}
          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
          <button
          disabled={isSubmitting}
          type="submit" 
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6 disabled:bg-gray-500">{isSubmitting?"Signing up":"Sign up"}</button>
        </form>
        <hr className="my-6 border-gray-300 w-full"/>
         <button 
         type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div className="flex items-center justify-center">
            <FcGoogle/>
              <span className="ml-4">
              sign up
              with
              Google
              </span>
          </div>
        </button>
        <p className="text-sm text-gray-500 mt-8 ml-2">&copy; 2025 Ecommerce</p>
      </div>
    </div>
  
  </section>
  )
}
