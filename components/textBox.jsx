import Image from "next/image";
import React, { useRef, useState } from "react";
import Accordian from "./accordian";
const TextBox = ({ lable, placeholder, icon }) => {
  return (
    <div className="flex w-full font-primary flex-col gap-1">
      <div className="text-xs md:text-base">
        {lable}
        <span className="text-red-500">*</span>{" "}
      </div>
      <div className="flex gap-1">
       {icon && <Image
          src={icon}
          layout="intrinsic"
          width={24}
          height={24}
          objectFit="contain"
        />}
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-gray-200/50 p-3 outline-none text-xs md:text-sm text-gray-600 rounded"
        />
      </div>
    </div>
  );
};
export default TextBox;

export const TextArea = ({ lable, placeholder }) => {
  return (
    <>
      <div className="flex  w-full font-primary flex-col gap-1">
        <div className="text-xs md:text-base">
          {lable}
          <span className="text-red-500">*</span>{" "}
        </div>
        <textarea
          maxLength={100}
          type="text"
          rows={5}
          placeholder={placeholder}
          className="w-full  bg-gray-200/50 p-3 outline-none text-sm text-gray-600 rounded"
        />
        <span className="ml-auto text-xs md:text-sm text-black-100">
          max 100 characters
        </span>
      </div>
    </>
  );
};

export const SelectBox = () => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("Select your role");
  return (
    <>
      <div className="flex w-full font-primary flex-col gap-1 relative">
        <div className="text-xs md:text-base">
          Your business type
          <span className="text-red-500">*</span>{" "}
        </div>

        <div className="flex flex-col w-full  items-center  ">
          <div className="flex w-full bg-gray-100 p-2 rounded items-center justify-between">
            <div className="flex relative flex col gap-2">
              {/* <div className="text-black-100 w-full">Select your role</div> */}
              <input
                type="text"
                name=""
                id=""
                value={select}
                className="w-full text-black-100 text-xs md:text-sm focus-none bg-transparent block outline-none border-none "
                placeholder="Select your role"
              />
            </div>
            <svg
              onClick={() => setShow(!show)}
              className="w-2 object-contain"
              viewBox="0 0 18 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {show && (
            <div className="bg-white z-20 flex flex-col gap- opt absolute scroll-smooth  overflow-y-scroll top-[63px] shadow-2xl rounded w-full max-h-[200px] ">
              <Accordian setSelect={setSelect} />
              <Accordian setSelect={setSelect} />
              <Accordian setSelect={setSelect} />
              <Accordian setSelect={setSelect} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const CustomSelect = () => {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("Select your role");
  return (
    <>
      <div className="flex w-full font-primary flex-col gap-1 relative">
        <div className="text-xs md:text-base">
          Your expert type
          <span className="text-red-500">*</span>{" "}
        </div>

        <div className="flex flex-col w-full  items-center  ">
          <div className="flex w-full bg-gray-100 p-2 rounded items-center justify-between">
            <div className="flex relative flex col gap-2">
              {/* <div className="text-black-100 w-full">Select your role</div> */}
              <input
                type="text"
                name=""
                id=""
                value={select}
                className="w-full text-black-100 text-xs md:text-sm focus-none bg-transparent block outline-none border-none "
                placeholder="Select your role"
              />
            </div>
            <svg
              onClick={() => setShow(!show)}
              className="w-2 object-contain"
              viewBox="0 0 18 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9201 0.949951L10.4001 7.46995C9.63008 8.23995 8.37008 8.23995 7.60008 7.46995L1.08008 0.949951"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {show && (
            <div className="bg-white z-20 flex flex-col gap-1 opt absolute scroll-smooth  overflow-y-scroll top-[63px] shadow-2xl border-2 rounded-2xl w-full max-h-[200px] ">
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
              <div
                onClick={(e) => {
                  setSelect(e.target.textContent);
                  setShow(false);
                }}
                className="hover:bg-gray-200 px-3 py-2 border-b-2 border-gray-200"
              >
                Career
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
