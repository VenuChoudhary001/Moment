import React, { useEffect, useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../utils";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  CircularProgressbarText: {
    // textAnchor:"end",
    position: "absolute",
    bottom: 0,
    right: 0,
    fontSize: "7px",
  },
});

const ProgressBar = ({ steps, totalSlide }) => {
  const ab = [];
  for (let i = 0; i < totalSlide; i++) {
    if (i <= steps) {
      ab.push(1);
    } else {
      ab.push(0);
    }
  }
  return (
    <>
      {ab.map((item, index) => {
        if (item == 1)
          return <div className="w-1/6 h-full bg-gray-600 rounded"></div>;
        else return <div className="w-1/6 h-full bg-gray-300 rounded"></div>;
      })}
    </>
  );
};

export const CircularProgress = ({ index }) => {
  let val = [
    { value: 33.33, name: "Search" ,
      icon:"/images/"
  },
    { value: 66.66, name: "Book" ,
      icon:"/images/"
  },
    { value: 100, name: "Enjoy" ,
      icon:"/images/"
  },
  ];

  return (
    <>
      <div className=" md:h-[500px] xl:h-[700px] md:w-[500px] h-[350px] w-[320px] relative py-3  xl:w-[700px]">
        <CircularProgressbarWithChildren
          value={val[index].value}
          strokeWidth={1}
          className="relative"
          circleRatio={0.75}
          classes={useStyles}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "round",
            trailColor: "#fff",
            pathColor: "#1E2739",
            pathTransitionDuration: 2,
          })}
        >
          <div className="absolute xl:bottom-20 md:-bottom-[5px] md:right-[45px] xl:right-[160px] text-white font-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl flex flex-col gap-2 items-center">
            <div className="bg-white w-10 h-10 md:w-14 md:h-14 flex item-center justify-center rounded-full">
              <img
                src="/images/search.svg"
                alt=""
                className="block w-4 md:w-6 object-contain"
              />
            </div>
            <div className="">{val[index].name}</div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </>
  );
};

export default ProgressBar;
