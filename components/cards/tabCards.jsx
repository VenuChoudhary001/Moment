import React, { useState } from "react";
import Button from "../button";

const TabCards = ({title,des,icon,activeTab,setActiveTab,id}) => {

  if (id!=activeTab) {
    return (
      <>
        <main onClick={()=>setActiveTab(id)} className="rounded font-primary cursor-pointer flex flex-col gap-4 lg:w-[240px] xl:w-[300px] 2xl:w-[350px] hover:shadow-lg shadow-lg bg-gray-100/50 p-6">
          <img src={`/images/${icon}.png`} alt="" className="block w-8" />
          <div className="font-semibol text-primary text-lg md:text-2xl">{title}</div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="rounded p-6 w-full  lg:w-[240px] xl:w-[300px] 2xl:w-[350px] flex cursor-pointer flex-col gap-2 md:gap-8 shadow-lg md:shadow-2xl">
        <img src={`/images/${icon}.svg`} alt="" className="block w-8" />
        <div className="font-semibold text-lg md:text-2xl">{title}</div>
        <div className="text-black-100 text-xs md:text-sm">
          {des}
        </div>
        <Button
          textColor={"text-white"}
          bgColor="bg-secondary"
          placeholder={"Join waitlist"}
        />
      </main>
    </>
  );
};

export default TabCards;
