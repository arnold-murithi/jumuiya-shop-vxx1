import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import Login from "@/components/Login"
import Signup from './Signup';

interface ModalProps{
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal ({isVisible,onClose,children}:ModalProps) {

  const handleClose =(e: React.MouseEvent<HTMLDivElement>) => {
  if ((e.target as HTMLElement).id === 'wrapper') onClose()
  }

  if(!isVisible) return null;


  return (
    <>
    <div
    id = "wrapper" 
    className="fixed inset-0 bg-black bg-opacity-5  backdrop-blur-sm flex justify-center items-center"
    onClick={handleClose}
    >
        <div className="w-[600px] h-96 flex flex-col mb-52">
            <MdOutlineCancel onClick={() => onClose()}
            className='size-5 place-self-end'/>
            <div className="bg-white p-5">
              {children}
                {/*<Login/>*/}
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal