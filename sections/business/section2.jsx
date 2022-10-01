import React from "react";
import Button from "../../components/button";
import Image from "next/image";
const Section2 = () => {
  return (
    <>
      <section className="container flex flex-col gap-12  items-center px-4 md:px-0 py-12 md:py-24 ">
        <div className="max-w-[850px] xl:max-w-[1000px] leading-none leading-[33px] md:leading-md text-black lg:leading-[60px] m-auto text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-primary ">
          The internet has no borders, and neither should your business
        </div>
        <Button
          textColor={"text-white"}
          bgColor="bg-secondary"
          placeholder={"Join now"}
        />
      </section>
      <section className="container py-24 px-4 md:px-0 font-primary gap-2 grid md:grid-cols-2 place-items-center">
        <div className="relative">
          <Image
            layout="intrinsic"
            width={810}
            height={500}
            src="/images/business-2.webp"
            alt=""
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col lg:max-w-[600px] md:items-start items-center justify-start gap-8">
          <div className="text-3xl text-center md:text-left lg:text-4xl text-black xl:text-5xl lg:max-w-[600px] leading-none leading-md lg:leading-[45px] xl:leading-[60px]">
            Take your services digital, in record time
          </div>
          <div className=" text-sm lg:text-xl text-black-100 font-normal">
            Setup online profile on our marketplace to get booked by millions of
            ambitious customers.
          </div>
          <Button
            placeholder="Get started"
            bgColor="bg-secondary"
            textColor="text-white"
          />
        </div>
      </section>
    </>
  );
};

export default Section2;
