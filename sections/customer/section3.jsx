import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import { CircularProgress } from "../../components/progressBar";
import useInterval from "../../utils/useInterval";

const Section3 = () => {
  let val=[{value:33.33,name:"Search"},{value:66.66,name:"Book"},{value:100,name:"Enjoy"}]
  
  const [state,setState]=useState(parseInt(1));

  
  useInterval(()=>{
    if(state < 2 ){
      setState(prev=>prev+ 1);
    }else{
      setState(0);
    }
  },3000)
   



  return (
    <>
      <section className="py-8 md:py-24 max-w-[280px] flex flex-col md:max-w-[540px] lg:max-w-[800px] xl:max-w-[900px] gap-6 mx-auto items-center justify-center">
        <img src="/images/star.svg" alt="star" className="block lg:w-20" />
        <div className="text-3xl md:text-4xl md:leading-md text-black lg:text-5xl xl:text-6xl font-medium leading-none xl:leading-[65px] lg:leading-[60px] text-center font-primary">
          Discover a world of in-person and virtual moments
        </div>
      </section>
      <section className="relative flex flex-col items-center justify-center mb-16 bg3 min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] w-full">
        <CircularProgress value={val} index={state} />
        <div className="p-4 text-sm flex flex-col gap-1 font-primary w-full container">
        <hr className="bg-white w-full md:h-[2px]"/>
        <ul className="ml-4 text-white list-disc"><li>How it works</li></ul>
    </div>
      </section>
      <div className="bg-secondary md:rounded-lg container">
         <div className="py-10 md:py-2 px-1 gap-3 md:gap-1   lg:p-4 place-items-center grid md:grid-cols-3 lg:grid-cols-2">
             <div className="text-white font-primary font-medium md:text-center text-base lg:text-xl xl:text-2xl">Join over <span className="font-semibold">21,983 </span> members on waitlist today</div>
             <div className="lg:max-w-[600px] md:max-w-[360px] md:col-span-2 lg:col-span-1 w-full max-w-[300px]">
                <div className="flex  bg-white w-full    p-1 lg:p-2 rounded-lg">
                      <input type={"text"} className="outline-none font-primary w-full bg-transparent text-black text-xs md:text-sm xl:text-xl px-2" placeholder="Enter email address" />
                      <Button 
                      placeholder="Join"
                      bgColor="bg-primary"
                      textColor="text-white"
                      />
                </div>
             </div>
         </div>
      </div>
    </>
  );
};

export default Section3;
