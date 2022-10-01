import React from "react";
import Image from "next/image";
import Button from "../../components/button";
const Section5 = () => {
  return (
    <>
      <section className="my-48 font-primary">
        <main className="container grid grid-cols-2 gap-10">
          <div className="max-w-[750px] text-black xl:text-6xl 2xl:text-7xl font-mediu ">
            Build a global brand even if you don’t have a website
          </div>
          <div className="text-black-100  text-xl flex flex-col gap-6">
            <div className="">
              List your service in minutes and share link via SMS, social media,
              or however you communicate with your customers.
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img src="/images/tick.svg" alt="" className="block" />
                No developers needed
              </div>
              <div className="flex gap-2 items-center">
                <img src="/images/tick.svg" alt="" className="block" />
                Your customers will be able to book and pay you instantly
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className=" lg:h-[500px] 2xl:h-[700px]  my-12 md:my-24 grid  md:grid-cols-2 font-primary">
        <div className="bg-primary px-4 md:px-0  2xl:px-24 w-full flex flex-col items-center justify-center">
          <div className="justify-center container py-6 flex text- md:text-left text-white md:p-12 w-full max-w-[700px] flex-col gap-4 md:gap-6">
            <div className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl leading-[33px] leading-none md:leading-[40px] xl:leading-[75px] font-medium">
              Partners,
              <br />
              Never Competitors
            </div>
            <div className="text-sm mx-aut leading-[18px] max-w-[280px] md:max-w-[700px] md:text-xl xl:text-2xl font-normal">
              Our support team is your team. Ready to get started ?
            </div>
            <Button
              placeholder={"Join now"}
              textColor="text-white"
              bgColor={"bg-secondary"}
            />
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-auto ">
          <Image src={"/images/business-6.webp"} layout="fill" />
        </div>
      </section>
      <section className="container  px-4 md:px-0 font-primary md:rounded-lg bg-secondary h-[350px] items-center text-center justify-center flex flex-col md:gap-12  text-white py-24 ">
        <div className="text-xl md:text-3xl lg:text-5xl font-bol">
        You’re here, how far do you want to go ?
        </div>
       
          <Button
            textColor="text-primary"
            bgColor="bg-white"
            placeholder="Let's go"
          />
 
      </section>
    </>
  );
};

export default Section5;
