import React from "react";
import Image from "next/image";
import { Tags } from "../button";
const ToolsCard = ({ title, des, icon, img, tags }) => {
  return (
    <>
      <main className="flex flex-col overflow-hidden font-primary gap-2 rounded-2xl bg-white">
        <div className="flex flex-col justify-between p-4 gap-4 h-[200px]">
          <img
            src={`/images/${icon}.svg`}
            alt=""
            className="block  w-8  lg:w-6 xl:w-10 object-contain"
          />
          <div className="flex flex-col gap-1">
            <div className="text-2xl  md:text-2xl lg:text-3xl xl:text-4xl text-primary font-medium">
              {title}
            </div>
            <div className="text-xs md:text-xs lg:text-sm xl:text-base  text-primary">
              {des}
            </div>
          </div>
          <div className="flex gap-3">
            {tags.map((item) => (
              <Tags key={item} placeholder={item} />
            ))}
          </div>
        </div>
        <div className="w-full  h-[250px] lg:h-[250px] xl:h-[400px] w-full relative">
          {/* <Image
            src={`/images/tools-${img}.webp`}
            layout="fill"
            objectFit='h-full cover'
            />  */}
          <img
            src={`/images/tools-${img}.webp`}
            alt=""
            className="block w-full h-full object-cover"
          />
        </div>
      </main>
    </>
  );
};

export default ToolsCard;
