import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
import { useRouter } from "next/router";
const Navbar = () => {
  const [show,setShow]=useState(false);
  
  return (
    <>
      <section className="absolute top-0  w-full h-[80px] z-[80]  ">
    
        <div className="container flex justify-between items-center p-6 md:p-8">
          <div className="relative hidden md:block w-[206px] h-[76px]">
            <Image src={"/images/logo_text.png"} layout="fill" />
          </div>
          {/* <div className="relative w-[40px] h-[40px] md:w-48 md:h-24"> */}
          <div className="relative  md:hidden w-[50px] h-[26px]">
            <Image src={"/images/logo_white.svg"} layout="fill" />
          </div>
          {/* </div> */}
          <div className="md:flex gap-2 hidden">
            <Button
              textColor="text-white"
              bgColor="bg-primary"
              placeholder="Experts"
            />
            <Button
              textColor="text-primary"
              bgColor="bg-white"
              placeholder="Business"
            />
          </div>
          <MobileNav  setShow={setShow} show={show}/>
        </div>
      </section>
    </>
  );
};

export const MobileNav = ({setShow,show}) => {
  const router = useRouter();
  console.log(router.pathname)
  if(!show){
    return (
      <div onClick={()=>setShow(true)} className="md:hidden  bg-white w-10 flex items-center justify-center rounded-full h-10 cursor-pointer">
            <img src="/images/menu.png" alt="" />
          </div>
    )
  }
  

  return (
    <>
      <main className="w-screen h-screen z-[99999] fixed top-0 left-0  bg-primary p-6">
        <div className="flex items-center justify-between">
          <div className="relative w-[50px] h-[26px]">
            <Image src={"/images/logo_white.svg"} layout="fill" />
          </div>
          <div onClick={()=>setShow(false)} className="bg-white w-8 flex items-center justify-center rounded-full h-8 cursor-pointer">
            <img src="/images/close.png" alt="" />
          </div>
        </div>
      </main>
    </>
  );
};
export default Navbar;
