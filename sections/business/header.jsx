import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/button";
import { MobileNav } from "../../components/navbar";

const Header = () => {
  const [show,setShow]=useState(false);
  return (
    <>
      <div className="absolute z-[20] w-screen mx-auto">
        <main className="container px-4 md:px-0 p-2 h-[80px] flex items-center justify-between">
          <div className="relative hidden md:block w-[206px] h-[76px]">
            <Image alt="moment logo" src={"/images/logo_text.png"} layout="fill" />
          </div>
          <div className="relative  md:hidden w-[50px] h-[26px]">
            <Image  alt="moment_logo"
            src={"/images/logo_white.svg"} layout="fill" />
          </div>
          <div className="md:flex items-center gap-12 hidden">
            <div className="text-white font-bold text-lg font-primary p-2 cursor-pointer">
              Blog
            </div>
            <Button
              textColor={"text-white"}
              bgColor="transparent hover:bg-white hover:text-black font-semibold border-2 border-white rounded-xl"
              placeholder={"Customer"}
            />
          </div>
          <MobileNav setShow={setShow} show={show}/>
        </main>
      </div>
    </>
  );
};

export default Header;
