import React from "react";

const Button = ({ textColor, bgColor, placeholder }) => {
  return (
    <div>
      <button
        className={`w-32 h-10   md:w-32 h-8 md:h-12 lg:w-36 text-sm font-medium md:text-base xl:text-lg outline-none font-primary  rounded ${textColor} ${bgColor}`}
      >
        {placeholder}
      </button>
    </div>
  );
};

export default Button;

export const Tags = () => {
  return (
    <>
      <div className="px-4 py-1 flex font-primary xl:text-base text-xs text-primary bg-gray-200 items-center justify-center border-2 borer-primary rounded-full">
        Reach
      </div>
    </>
  );
};
