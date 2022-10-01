import React from 'react'
import Image from 'next/image'
const ProfileCard = () => {
  return (
    <article className='relative  w-full max-w-[220px] lg:max-w-[350px]  rounded-lg overflow-hidden font-primary  h-[300px] md:h-[400px]'>
       <Image layout='fill' src="/images/2.png" alt="" className="block absolute object-cover top-0 w-full h-full -z-[1] " />
       <div className="flex p-4 flex-col justify-between h-full">
          <div className="bg-white text-sm px-2 rounded-full max-w-min font-semibold">New</div>
          <div className="flex flex-col gap-2 items-center justify-center ">
            <img src="/images/correct.svg" alt="" className="block w-8 object-contain" />
            <div className="text-base md:text-3xl text-center text-white   font-bold">Ester Howard</div>
            <hr className='w-1/3 h-[2px]'/>
            <div className="text-sm md:text-base text-white text-center font-semibold">Teaches songwriting  </div>
            <div className="text-xs md:text-sm text-white text-center font-normal">2 hours 30 minutes</div>

          </div>
       </div>
    </article>
  )
}

export default ProfileCard