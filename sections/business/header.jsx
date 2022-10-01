import Image from 'next/image'
import React from 'react'
import Button from '../../components/button'

const Header = () => {
  return (
    <>
    <div className="absolute z-[20] w-screen mx-auto">
      
    <main className="container p-2 flex items-center justify-between">
      <div className="relative  w-[206px] h-[76px]">

      <Image 
      src={"/images/logo_text.png"}
      layout="fill"
      />
      </div>
      <div className="flex items-center gap-12">

      <div className="text-white font-bold text-lg font-primary p-2 cursor-pointer">Blog</div>
      <Button 
      textColor={"text-white"}
      bgColor="transparent hover:bg-white hover:text-black font-semibold border-2 border-white rounded-xl"
      placeholder={"Customer"}
      />
      </div>
    </main>
      </div>
    </>
  )
}

export default Header