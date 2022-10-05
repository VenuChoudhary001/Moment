import Image from "next/image";
import React from "react";

const JoinCard = ({title,des,id,img}) => {
  return (
    <>
      <main className="grid max-h-[160px] md:max-h-[200px]  grid-cols-12  w-full border-2 hover:border-secondary cursor-pointer rounded-xl overflow-hidden">
        <div className="col-span-5 md:col-span-2 overflow-hidde">
          <img
            src={`/images/${img}.webp`}
            alt=""
            className="block object-cover  "
          />
        </div>
        <div className="col-span-5 py-4 md:col-span-8 flex flex-col items-start justify-center">
          <div className="text-primary md:text-xl lg:text-2xl xl:text-4xl">
           {title}
          </div>
          <div className="text-[11px] md:text-sm lg:text-base text-black-100">
           {des}
          </div>
        </div>
        <div className="col-span-2 md:col-span-2 flex items-center justify-end px-4">
          <svg
            className="w-[10px] md:w-8  "
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 12H20.33"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </main>
    </>
  );
};

export default JoinCard;
