import React, { useState } from "react";

const Accordian = ({ setSelect }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-">
        <div className="flex w-full px-4 py-1 items-center justify-between">
          <div className="text-black-100 w-full font-primary font-semibold text-sm">
            Health and Wellness
          </div>
          {show ? (
            <>
              <div className="" onClick={() => setShow(!show)}>
                <img
                  src="/images/minus.png"
                  alt=""
                  className="block object-contain w-4"
                />
              </div>
            </>
          ) : (
            <>
              <img
                src="/images/add.png"
                alt=""
                className="block object-contain w-4"
                onClick={() => setShow(!show)}
              />
            </>
          )}
        </div>
        {show && (
          <div className="text-xs md:text-sm flex text-base flex-col gap-2">
            <div
              onClick={(e) => setSelect(e.target.textContent)}
              className="text-black-100 border-b-[1px] border-gray-50 font-normal hover:bg-gray-200 pl-8 py-[2px]"
            >
              Dientician{" "}
            </div>
            <div
              onClick={(e) => setSelect(e.target.textContent)}
              className="text-black-100 border-b-[1px] border-gray-50 font-normal hover:bg-gray-200 pl-8 py-[2px]"
            >
              Chiropractor
            </div>
            <div
              onClick={(e) => setSelect(e.target.textContent)}
              className="text-black-100 border-b-[1px] border-gray-50 font-normal hover:bg-gray-200 pl-8 py-[2px]"
            >
              Personal training
            </div>
            <div
              onClick={(e) => setSelect(e.target.textContent)}
              className="text-black-100 border-b-[1px] border-gray-50 font-normal hover:bg-gray-200 pl-8 py-[2px]"
            >
              Fitness Classes
            </div>
            <div
              onClick={(e) => setSelect(e.target.textContent)}
              className="text-black-100 border-b-[1px] border-gray-50 font-normal hover:bg-gray-200 pl-8 py-[2px]"
            >
              Health Consultations
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordian;
