import Image from "next/image";
import React from "react";
import Button from "../../components/button";
import Header from "./header";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="w-screen flex flex-col justify-end items-end h-[885px] relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={"/images/business-hero.webp"}
          className="-z-[2]"
        />
        <div className="absolute -z-[1] bottom-0 w-screen h-[426px] grad"></div>

        <div className="container ">
          <div className="flex flex-col py-20 gap-8">
            <div className="flex gap-8">
              <Image
                src={"/images/facebook.svg"}
                layout="intrinsic"
                width={60}
                height={60}
              />
              <Image
                src={"/images/twitter.svg"}
                layout="intrinsic"
                width={60}
                height={60}
              />{" "}
              <Image
                src={"/images/instagram.svg"}
                layout="intrinsic"
                width={60}
                height={60}
              />
            </div>
            <div className="text-white max-w-[750px] font-primary font-medium text-6xl">
            Endless possibilities for 
every business
            </div>
            <Button 
            textColor={"text-white"}
            bgColor="bg-secondary"
            placeholder={"Join waitlist"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
