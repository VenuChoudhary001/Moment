import Image from "next/image";
import Button from "../../components/button";
import ImageCarousel from "../../components/carousels/ImageCarousel";
import Navbar from "../../components/navbar";

const Hero = () => { 
  return (
    <>
      <Navbar />
      
      <section className="grid relativ grid-cols-1 md:grid-cols-2 md:max-h-[700px] md:min-h-[700px] lg:max-h-[900px] lg:min-h-[900px]">

        <main className="w-full h-full min-h-[500px] relative">
          <ImageCarousel>
          
            <Image 
            src={"/images/hero-1.webp"}
            layout="fill"
            objectFit="cover"
            priority
            alt="hero_image_slides"
            />
             <Image 
            src={"/images/hero-2.webp"}
            layout="fill"
            objectFit="cover"
            priority
            alt="hero_image_slides"
            />
             <Image 
            src={"/images/hero-3.webp"}
            layout="fill"
            objectFit="cover"
            priority
            alt="hero_image_slides"
            />
             <Image 
            src={"/images/hero-4.webp"}
            layout="fill"
            objectFit="cover"
            priority
            alt="hero_image_slides"
            />
            
              </ImageCarousel>
        </main>
        <main className=" flex flex-col gap-8  h-[300px]   md:mt-[0]  md:h-full xl:px-24 font-primary justify-center text-white items-center bg-primary">
          <div className="flex flex-col items-center gap-2 md:gap-8">
            <div className="p-4 text-4xl md:max-w-[350px] lg:max-w-[420px] xl:max-w-[600px] leading-md md:leading-md lg:text-5xl xl:text-[58px]  leading-none lg:leading-[55px] xl:leading-[60px] text-center">
              Experiences that matter
            </div>
            <Button
              textColor="white"
              bgColor="bg-secondary"
              placeholder="Join waitlist "
            />
          </div>
          <div className="flex flex-col gap-4 min-h-[00px] items-center justify-center">
            <div className="flex font-primary font-medium text-sm md:text-lg items-center gap-2 text-white">
              <hr className="w-6" /> Our Social Media <hr className="w-6" />
            </div>
            <div className="flex gap-3">
              <img
                src="/images/facebook.svg"
                alt=""
                className="block w-6 md:w-10 cursor-pointer"
              />
              <img
                src="/images/instagram.svg"
                alt=""
                className="block w-6 md:w-10 cursor-pointer"
              />
              <img
                src="/images/twitter.svg"
                alt=""
                className="block w-6 md:w-10 cursor-pointer"
              />
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
