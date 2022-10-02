import React, { useEffect, useState } from "react";
import Button from "./button";
import Image from "next/image";
const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <section className="absolute top-0  w-full h-[80px] z-[80]  ">
        <div className="container flex justify-between items-center p-4 md:p-8">
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
          <div className="md:hidden fixed right-10">
            <button className="w-20 h-7 rounded-full shadow-xl border-2 border-gray-200 text-black text-xs bg-white font-bold font-primary  ">
              Experts
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
