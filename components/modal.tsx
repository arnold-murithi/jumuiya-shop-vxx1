import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import Login from "@/components/LoginForm"
import Signup from './SignupForm';

interface ModalProps{
  //isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal ({children, onClose}:ModalProps) {

  // const handleClose =(e: React.MouseEvent<HTMLDivElement>) => {
  // if ((e.target as HTMLElement).id === 'wrapper') onClose()
  // }

  // if(!isVisible) return null;


  return (
    <>
    <div
    id = "wrapper" 
    className="fixed inset-0 bg-black bg-opacity-5  backdrop-blur-sm flex justify-center items-center"
    >
        <div className="w-[600px] h-96 flex flex-col mb-52">
            <MdOutlineCancel
            className='size-5 place-self-end'/>
            <div className="bg-white p-5">
              {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal