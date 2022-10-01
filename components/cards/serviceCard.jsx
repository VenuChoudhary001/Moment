import React, { Component } from "react";
import Image from "next/image";
export const CarouselCard = ({img}) => {
  return (
    <>
      <main className=" flex flex-col justify-end max-w-[160px] h-[240px] md:max-w-[260px] xl:max-w-[380px] md:h-[400px] xl:h-[550px] p-6 bg-primary rounded-lg relative w-full overflow-hidden">
        <Image
        layout="fill"
          src={img}
          alt="Hair treatment"
        />
      </main>
    </>
  );
};
