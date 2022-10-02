import Image from "next/image";
import React from "react";
import Button from "../../components/button";
const Section4 = () => {
  return (
    <>
      <section className="container px-4 md:px-0 font-primary max-w-[1000px] py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col gap-2 xl:gap-4 2xl:gap-8 ">
      <img src="/images/briefcase.svg" alt="briefcase" className="md:hidden w-12 md:w-8 lg:w-12 xl:w-" />

        <div className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  flex md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 items-center justify-center font-medium">
          <div className="w-3/">Built for today's forward-thinking</div>
          <hr className="h-[4px] md:w-[100px] lg:w-[100px] xl:w-[250px] 2xl:w-[500px] bg-black" />
        </div>
        <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  flex gap-2 items-center justify-cente font-medium">
          <img src="/images/briefcase.svg" alt="briefcase" className="hidden md:block md:w-8 lg:w-12 xl:w-24" />
          businesses and entrepreneurs
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[660px]">
        <main className="relative w-full">
          <Image src={"/images/business-3.webp"} layout="fill" />
        </main>
        <main className="relative w-full">
          <Image src={"/images/business-4.webp"} layout="fill" />
        </main>
      </section>
      <section className="md:my-24 py-24">
      <main className="container my gap-8 px-4 md:px-0 font-primary place-items-center relative  grid md:grid-cols-2">
        <div className="w-full">
          <Image
            layout="intrinsic"
            height={608}
            width={850}
            src="/images/business-5.webp"
            className="rounded"
            alt="jnj"
          />
        </div>
        <div className="flex flex-col lg:max-w-[600px] text-black lg:p-8 justify-center h-full gap-2 md:gap-8">
          <div className="text-3xl md:text-3xl font-medium lg:text-4xl  xl:text-6xl text-black">
            Out with the old, in with the new
          </div>
          <div className=" text-sm lg:text-xl text-black-100 font-normal">
          Offer services or in-person, process payment, built a global brand, or use tools designed to grow your business
          </div>
          <Button
            placeholder="Join waitlist"
            textColor="text-white"
            bgColor="bg-primary"
          />
        </div>
      </main>
      </section>
      <div className="bg-secondary md:rounded-lg container">
         <div className="py-10 md:py-2 px-1 gap-3 md:gap-1   lg:p-4 place-items-center grid md:grid-cols-3 lg:grid-cols-2">
             <div className="text-white font-primary font-medium md:text-center text-base lg:text-xl xl:text-2xl">Join over <span className="font-semibold">1,983 </span> businesses on waitlist today</div>
             <div className="lg:max-w-[600px] md:max-w-[360px] md:col-span-2 lg:col-span-1 w-full max-w-[300px]">
                <div className="flex  bg-white w-full    p-1 lg:p-2 rounded-lg">
                      <input type={"text"} className="outline-none font-primary w-full bg-transparent text-black text-xs md:text-sm xl:text-xl px-2" placeholder="Enter email address" />
                      <Button 
                      placeholder="Join"
                      bgColor="bg-primary"
                      textColor="text-white"
                      />
                </div>
             </div>
         </div>
      </div>
    </>
  );
};

export default Section4;
