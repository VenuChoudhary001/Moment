import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/button";
import { MobileNav } from "../../components/navbar";
const Header = () => {
    const [show,setShow]=useState(false)
  return (
    <>
      <div className="flex items-center container  py-4 md:py-8 justify-between">
        <div className="relative hidden lg:block lg:w-[150px] lg:h-[56px] xl:w-[206px] xl:h-[76px]">
            <a href="/">

          <Image src={"/images/logo_text_black.png"} layout="fill" objectFit="contain" />
            </a>
        </div>
        <div className="relative  lg:hidden w-[80px] h-[26px]">
          <Image src={"/images/logo_black.svg"} layout="fill" objectFit="contain" />
        </div>
        <div className="hidden md:flex gap-4 lg:gap-12 font-primary text-base xl:text-lg text-black-100  items-center">
            <a href="#" className="cursor-pointer">Customer</a>
            <a href="#" className="cursor-pointer">Business</a>
            <Button 
            textColor={"text-primary"}
            bgColor={"bg-white border-2 border-gray-200 rounded-xl"}
            placeholder={"Contact us"}
            />
        </div>
        <MobileNav setShow={setShow} show={show}/>
      </div>
    </>
  );
};

export default Header;
