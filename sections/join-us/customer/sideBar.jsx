import React from "react";
import ImageCarousel from "../../../components/carousels/ImageCarousel";
import Image from "next/image";
const SideBar = () => {
  return (
    <>
      <main className="w-full h-full min-h-[500px] relative">
        <ImageCarousel>
          <main className="w-full flex flex-col items-start p-8 justify-end h-full min-h-[500px] relative">
            <Image
              src={"/images/hero-1.webp"}
              layout="fill"
              objectFit="cover"
              priority
              className="-z-[1] "
            />
            <div className="text-3xl lg:text-5xl text-left max-w-[400px] text-gray-100  font-primary">
              Experiences that matter
            </div>
          </main>
          <main className="w-full flex flex-col items-start p-8 justify-end h-full min-h-[500px] relative">
            <Image
              src={"/images/customer-join-2.webp"}
              layout="fill"
              objectFit="cover"
              priority
              className="-z-[1] "
            />
            <div className="text-3xl lg:text-5xl text-left max-w-[400px] text-gray-100  font-primary">
          Moments you love
            </div>
          </main>
          <main className="w-full flex flex-col items-start p-8 justify-end h-full min-h-[500px] relative">
            <Image
              src={"/images/customer-join-3.webp"}
              layout="fill"
              objectFit="cover"
              priority
              className="-z-[1] "
            />
            <div className="text-3xl lg:text-5xl text-left max-w-[400px] text-gray-100  font-primary">
            Do the 
extraordinary
            </div>
          </main>
        </ImageCarousel>
      </main>
    </>
  );
};

export default SideBar;
