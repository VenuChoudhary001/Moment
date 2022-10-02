import React, {useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressBar from "./progressBar";


const CustomCarousel = ({ res,children,showProgress=true,centerMode=false ,deviceType="desktop"}) => {
  const [currentStep, setCurrentStep] = useState(0);
  console.log(deviceType)
  return (
    <>
      {showProgress && <div className=" h-[3px] flex gap-1 w-2/4  mx-auto md:mr-auto flex ">
        <ProgressBar steps={currentStep} totalSlide={6}/>
      </div>}
      <div className="w-full  mb-8 max-h-[600px] h-full overflow-hidden flex flex-col gap- ">
        <Carousel
          swipeable={true}
          beforeChange={(nextSlide, { currentSlide }) => {
            setCurrentStep(nextSlide);
          }}
          autoPlay={true}
          // centerMode={true} 
          draggable={true}
          responsive={{...res}}
          ssr={true} // means to render carousel on server-side.
          infinite={false}
          rewindWithAnimation
          rewind
          minimumTouchDrag={0.02}
          focusOnSelect
          pauseOnHover
          partialVisbile={true}
          paritialVisibilityGutter={80}
           autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="transform 0.2s linear"
          transitionDuration={30}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-- mx-2"
          // showDots
          // renderDotsOutside
          // additionalTransfrom={-10 * 5}
        >
         {children}
         <div></div>
        </Carousel>
      </div>
    </>
  );
};

export default CustomCarousel;
