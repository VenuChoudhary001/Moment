import React from "react";
import JoinCard from "../../../components/cards/joinCard";

const Hero = () => {
    
  return (
    <>
      <div className="container px-4 md:px-0 font-primary grid grid-cols-12 gap-1 md:gap-2">
        <div className="col-span-12 lg:col-span-2 ">
          <div className="flex gap-2 md:gap-3 cursor-pointer text-sm md:text-lg max-w-min  text-secondary">
            <img
              src="/images/arrow-left.png"
              alt=""
              className="block w-2 md:w-4 object-contain text-secondary"
            />
            Back
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-10  max-w-[1100px] mb-12 flex flex-col gap-4 md:gap-12">
          <div className="flex flex-col  md:gap-2">
            <div className="text-black-100 text-base md:text-lg">Welcome</div>
            <div className="text-primary  font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Join Moment Today!
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <JoinCard
              title={"Business"}
              des={"Become our partner and increase your sales more than ever"}
              id={1}
              img="business"
            />
            <JoinCard
              title={"Expert"}
              des={"Become our partner and increase your sales more than ever"}
              id={2}
              img="expert"
            />
            <JoinCard
              title={"Instructor"}
              des={"Become our partner and increase your sales more than ever"}
              id={3}
              img="instructor"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
