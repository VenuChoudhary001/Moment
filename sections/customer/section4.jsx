import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/cards/profileCard";
import CustomCarousel from "../../components/carousel";

const Section4 = () => {
  const [deviceType,setDeviceType]=useState("");
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1524 },
      items: 6,
      slidesToSlide: 4, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    lg:{
      breakpoint: { max: 1523, min: 1205 },
      items: 5,
      slidesToSlide: 4,
      "paritialVisibilityGutter": 40 
    },
    md: {
      breakpoint: { max: 1204, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    sm: {
      breakpoint: { max: 1023, min: 600 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    xs:{
        breakpoint: { max: 599, min: 0 },
        items: 1 ,
        slidesToSlide: 1, 
        "paritialVisibilityGutter": 140 
    }
  };
  useEffect(()=>{
    if(window.innerWidth < 563){
      setDeviceType("mobile")
    }
  },[])
  return (
    <>
      <section className="container flex flex-col px-4 md:px-0 py-12 md:py-24 ">
        <div className="max-w-[850px] leading-none leading-[33px] md:leading-md text-black lg:leading-[60px] m-auto text-center text-3xl md:text-4xl lg:text-5xl font-primary ">
          Learn from the world’s best of leaders, entrepreneurs and icons
        </div>
        <div className="my-12">
        <CustomCarousel deviceType={deviceType}  res={responsive} showProgress={false} >
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/> 
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
        </CustomCarousel>
        </div>
      </section>
    </>
  );
};

export default Section4;
