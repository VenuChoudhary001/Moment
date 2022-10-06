import Image from "next/image";
import React from "react";
import Button from "../../components/button";
import InspirationCards from "../../components/cards/inspirationCards";

const Section6 = () => {
  return (
    <>
      <section className=" lg:h-[500px] xl:h-[600px] my-12 md:my-24 grid  md:grid-cols-2 font-primary">
        <div className="relative w-full h-[300px] md:h-auto ">
          <Image src={"/images/7.jpg"} alt="" layout="fill" />
        </div>
        <div className="bg-primary px-4 md:px-0  w-full flex flex-col items-center justify-center">
          <div className="justify-center container py-6 flex text- md:text-left text-white md:p-12 w-full max-w-[600px] flex-col gap-4 md:gap-6">
            <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-[33px] leading-none md:leading-[40px] xl:leading-[55px] font-semibold">
              Endless possibilites for every business
            </div>
            <div className="text-sm mx-aut leading-[18px] max-w-[280px] md:max-w-[500px] md:text-xl xl:text-2xl font-normal">
              Businesses, experts and instructors, sign up to get notified
            </div>
            <Button
              placeholder={"Join waitlist"}
              textColor="text-primary"
              bgColor={"bg-white"}
            />
          </div>
        </div>
      </section>
      <section className="container flex flex-col px-4 md:px-0 py-12 md:py-24 ">
        <div className="max-w-[850px] leading-none leading-[33px] font-medium md:leading-md text-black lg:leading-[60px] m-auto text-center text-3xl md:text-4xl lg:text-5xl font-primary ">
        Find inspiration from the latest trends of business near you
        </div>
        <div className="my-12  xl:max-w-[1200px]  m-auto flex overflow-hidden flex-row gap-4">
          <div className="md:flex hidden gap-4">

           <InspirationCards/>
           <InspirationCards/>
          </div>
           <InspirationCards/>
           <InspirationCards/>
        </div>
       
      </section>
    </>
  );
};

export default Section6;
