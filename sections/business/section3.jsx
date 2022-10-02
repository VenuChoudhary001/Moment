import React from 'react'
import ToolsCard from '../../components/cards/toolsCard'

const Section3 = () => {
  return (
    <>
    <section className="bg-primary py-12 md:py-12 lg:py-16 xl:py-24 flex flex-col gap-8 md:gap-16   ">
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2">
            <div className="text-white font-medium font-primary text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[600px]">
            The tools you need 
to win every sale
            </div>
        </div>
        <div className="container px-4 grid grid-cols-1 md:grid-cols-2  gap-8">
            <ToolsCard/>
            <ToolsCard/>
            <ToolsCard/>
            <ToolsCard/>
        </div>
    </section>
    </>
  )
}

export default Section3