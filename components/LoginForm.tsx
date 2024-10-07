"use client"
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from 'next-auth/react';

function Login() {
  return (
    <section className="flex flex-col  h-full items-center mx-auto">

    <div className="bg-inherit hidden w-full  h-full mx-auto ">
      {/*<Image src="bg.jpg" alt="" className="w-full h-full object-cover"/>*/}
    </div>
  
    <div className="w-1/2 flex items-center justify-center">
  
      <div className="w-full h-full">
  
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-0">Log in to your account</h1>
  
        <form 
        className="mt-6">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input 
            type="email" name="email"  
            placeholder="Enter Email Address" 
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required/>
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
            type="password" name="password"  placeholder="Enter Password"  
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              min-w-64    focus:bg-white focus:outline-none" required/>
          </div>
  
          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button
           onClick={() => signIn()}
          type="submit" 
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>
  
        <hr className="my-6 border-gray-300 w-full"/>

         <button 
         type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
          <div className="flex items-center justify-center">
            <FcGoogle/>
              <span className="ml-4">
              Log in
              with
              Google
              </span>
          </div>
        </button>
  
        <p className="mt-8">
          Need an account? 
          <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
            Create an account
          </a>
        </p>
  
        <p className="text-sm text-gray-500 mt-8 ml-2">&copy; 2024 E-commerce</p>
      </div>

    </div>
  
  </section>
  )
}

export default Login;