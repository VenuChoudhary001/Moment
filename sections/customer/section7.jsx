import Image from "next/image";
import React from "react";
import Button from "../../components/button";

const Section7 = () => {
  return (
    <>
      <section className="container gap-8 px-4 md:px-0 font-primary place-items-center relative  grid md:grid-cols-2">
        <div className="w-full">
          <Image
            layout="intrinsic"
            height={500}
            width={600}
            src="/images/5.webp"
            className="rounded"
            alt="jnj"
          />
        </div>
        <div className="flex flex-col lg:max-w-[600px] lg:p-8 justify-center h-full gap-2 md:gap-4">
          <div className="text-3xl md:text-3xl font-medium  xl:text-5xl text-black">
            Out with the old, in with the new
          </div>
          <div className=" text-sm lg:text-xl text-black font-normal">
            Sell online, process payments, build a global brand, or use business
            tools designed to grow your business.
          </div>
          <Button
            placeholder="Join waitlist"
            textColor="text-white"
            bgColor="bg-primary"
          />
        </div>
      </section>
      <section className="container px-4 md:px-0 min-h-[300px] md:min-h-[450px] font-primary text-white py-8 md:py-24 grid grid-cols-2">
        <div className="relative gap-4 flex flex-col items-center justify-center bg-6 col-span-2 rounded overflow-hidden lg:h-[400px] xl:h-[500px]">
          <div className="text-xl text-center md:text-4xl">Ready to get started ?</div>
          <Button
            placeholder={`Let's go`}
            textColor={"text-white"}
            bgColor={
              "bg-transparent hover:bg-white hover:text-black border-[2px] border-white"
            }
          />
        </div>
      </section>
      <section className="container  px-4 md:px-0 font-primary md:rounded bg-secondary h-[250px] items-center text-center justify-center flex flex-col md:gap-2  text-white py-24 ">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold">
          Something amazing is coming
        </div>
        <div className="text-sm md:text-lg">
          That’s right: be the first to know when we’re live and receive perks{" "}
        </div>
        <div className="flex flex-col md:flex-row mt-2 gap-4">
          <input
            type={"text"}
            className="p-2 outline-none text-black rounded w-[300px] xl:w-[400px]"
            placeholder="Enter your email address"
          />
          <Button
            textColor="text-white"
            bgColor="bg-primary"
            placeholder="Notify me"
          />
        </div>
      </section>
    </>
  );
};

export default Section7;
