import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import Header from "./header";

const Hero = () => {

  const [deviceType,setDeviceType]=useState("desktop");

  useEffect(()=>{
    if(window.innerWidth < 460){
      setDeviceType("mobile")
    }
  },[])


  return (
    <>
      <Header />
      <section className="w-screen flex flex-col justify-end items-end h-[600px] md:h-[885px] relative">
        {deviceType!="mobile" ?  <Image
          layout="fill"
          objectFit="cover"
          src={"/images/business-hero.webp"}
          className="-z-[2]"
          priority
        />:<Image
        layout="fill"
        objectFit="cover"
        src={"/images/mobile_hero.webp"}
        className="-z-[2]"
        priority
      />}
        <div className="absolute -z-[1] bottom-0 w-screen h-[426px] grad"></div>

        <div className="container px-4 md:px-0 ">
          <div className="flex flex-col py-20 gap-8">
            <div className="flex gap-8">
              <div className="w-[40px] md:w-[60px] relative">
                <Image
                  src={"/images/facebook.svg"}
                  layout="responsive"
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-[40px] md:w-[60px] relative">
                <Image
                  src={"/images/twitter.svg"}
                  layout="responsive"
                  width={60}
                  height={60}
                />
              </div>
              <div className="w-[40px] md:w-[60px] relative">
                <Image
                  src={"/images/instagram.svg"}
                  layout="responsive"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="text-white max-w-[750px] font-primary font-medium text-3xl md:text-6xl">
              Endless possibilities for every business
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
