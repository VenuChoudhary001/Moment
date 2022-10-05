import React from 'react'
import Button from './button'

const Modal = ({show,setShow}) => {
  return (
    <>
 
    <div className="fixed flex items-center scroll-hidden justify-center top-0 w-screen h-[100vh] z-[19999990] bg-black-100/50 ">
        <div className="bg-white font-primary text-center w-[300px] lg:w-[700px] rounded-xl relative  flex flex-col gap-4 p-8 md:p-10 items-center justify-center z-[29999990]">
            <img src="/images/close.png" alt="" className="block absolute top-5 right-5 cursor-pointer" />
            <img src="/images/tick.svg" alt="" className="block w-8 lg:w-12 " />
            <div className="flex flex-col gap-1">

            <div className="text-primary text-xl lg:text-2xl">Join waitlist confirmation</div>
            <div className="text-black-100 text-xs">Is the information you provided correct? Information that has been sent cannot be changed anymore</div>
            </div>
            <div className="flex gap-4">
                <Button placeholder={"Cancel"} bgColor="bg-white" textColor={"text-primary"}/>
                <Button placeholder={"Yes, I'm sure"} bgColor="bg-primary" textColor={"text-white"}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal