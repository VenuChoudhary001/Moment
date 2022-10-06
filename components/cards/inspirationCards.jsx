import Image from 'next/image'
import React from 'react'

const InspirationCards = () => {
  return (
    <main className=' max-w-[160px] h-[280px]  md:max-w-[150px] lg:max-w-[200px] xl:max-w-[280px] font-primary text-white rounded-lg overflow-hidden w-full md:h-[280px] lg:h-[360px] xl:min-h-[460px] flex  gap-4 flex-col items-start justify-end p-2 relative'>
     <Image 
     layout='fill'
     src={'/images/test.webp'}
     className="-z-[1]"
     alt=''
     />
     <div className="text-xs md:text-sm lg:text-base xl:text-xl font-semibold">
     Any mechanical keyboard enthusiasts in design?
     </div>
     <div className="flex items-center gap-2 md:gap-1 text-xs lg:text-base">
        <img src="/images/lg.png" alt="" className="block w-8 md:w-7 xl:w-8 object-contain" />
        Jenny Wilson
        <img src="/images/correct.svg" alt="" className="block w-4 xl:w-6 object-contain" />
     </div>
     <div className="flex gap-1 text-xs w-full font-semibold items-center  justify-between">
        <div className="flex gap-1 items-center">

        <img src="/images/eye.svg" alt="" className="block w-7 xl:w-8 object-contain" />
        2361 views
        </div>
        <img src="/images/arrow-right.svg" alt="" className="block w-4 lg:w-8 object-contain" />
     </div>
    </main>
  )
}

export default InspirationCards