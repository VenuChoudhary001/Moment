import React from 'react'
import Image from 'next/image'
import { Tags } from '../button'
const ToolsCard = () => {
  return (
    <>
    <main className="flex flex-col overflow-hidden font-primary gap-2 rounded-2xl bg-white">
        <div className="flex flex-col p-4 gap-4">

        <img src="/images/user.svg" alt="" className="block  w-8  lg:w-6 xl:w-10 object-contain" />
        <div className="flex flex-col gap-1">
            <div className="text-2xl  md:text-2xl lg:text-3xl xl:text-4xl text-primary font-medium">Customers</div>
            <div className="text-xs md:text-xs lg:text-sm xl:text-base  text-primary">Treat your customers like a VIP and build a lasting relationship</div>
        </div>
        <div className="flex gap-3">
            <Tags/>
            <Tags/>
            <Tags/>
        </div>
        </div>
        <div className="w-full max-h-[400px] h-[200px] lg:h-[250px] xl:h-[400px] relative">
            <Image
            src={"/images/tools-1.webp"}
            layout="fill"
            objectFit='cover'
            /> 
        </div>
    </main>
    </>
  )
}

export default ToolsCard