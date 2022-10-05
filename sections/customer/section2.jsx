import React,{useEffect,useState} from "react";
import ProfileCard from "../../components/cards/profileCard";
import { CarouselCard } from "../../components/cards/serviceCard";
import CustomCarousel from "../../components/carousel";

const Section2 = () => {
  const [deviceType,setDeviceType]=useState("");

  const responsive = {
    xl:{
      breakpoint: { max: 3000, min: 1501 },
      items: 3,
      slidesToSlide: 1,
      "paritialVisibilityGutter": 100 
    },
    lg: {
      breakpoint: { max: 1500, min: 1205 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    md: {
      breakpoint: { max: 1204, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    sm: {
      breakpoint: { max: 1023, min: 768 },
      items: 2 ,
      slidesToSlide: 1, // optional, default to 1.
      "paritialVisibilityGutter": 40 
    },
    xs:{
        breakpoint: { max: 410, min: 370 },
        items: 1,
        slidesToSlide: 1, 
        "paritialVisibilityGutter": 230 
    },
    xxs:{
      breakpoint: { max: 369, min: 320 },
      items: 1,
      slidesToSlide: 1, 
      "paritialVisibilityGutter":160 
    }
  };

  useEffect(()=>{
    if(window.innerWidth < 563){
      setDeviceType("mobile")
    }
  },[])
  return (
    <>
    <div className="grid gap-2 md:grid-cols-2 items-center font-primary px-4 md:px-0 container py-12">
      <div className="flex flex-col gap-2">
        <img
          src="/images/logo_pink.svg"
          alt=""
          className=" object-contain w-[48px] h-[48px]"
        />
        <div className="lg:text-5xl text-2xl font-medium md:text-3xl xl:text-6xl">Moments you love</div>
      </div>
      <div className="flex items-end justify-end">
        <div className="text-sm lg:text-base  xl:text-lg     text-black max-w-[600px]">
          Whether you already have an established routine or are interested in
          something new, you can discover and book business and professional
          services near you
        </div>
      </div>
    </div>
    <div className="grid mb-6 grid-cols-1 md:grid-cols-6 xl:grid-cols-4">
        <div className=""></div>
        <div className="md:col-span-5 xl:col-span-3 items-end flex flex-col gap-4">
           
            <CustomCarousel deviceType={deviceType} res={responsive}>
              <CarouselCard img={"/images/service/3.webp"}/>
              <CarouselCard img={"/images/service/4.webp"}/>
              <CarouselCard img={"/images/service/5.webp"}/>
              <CarouselCard img={"/images/service/6.webp"}/>
              <CarouselCard img={"/images/service/3.webp"}/>
              <CarouselCard img={"/images/service/4.webp"}/>
              <CarouselCard img={"/images/service/5.webp"}/>
              <CarouselCard img={"/images/service/6.webp"}/>
            </CustomCarousel>
        </div>
    </div>
    <div className="p-4 text-sm font-primary w-full container">
        <hr className="bg-gray-400 w-full h-[2px]"/>
        <ul className="ml-4 list-disc"><li>Service offerings</li></ul>
    </div>
    </>
  );
};

export default Section2;
