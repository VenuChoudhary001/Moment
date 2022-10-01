import React from "react";

const Footer = () => {
  return (
    <>
      <section className="container px-4 md:px-0 min-h-[700px] md:min-h-[200px] font-primary flex flex-col gap-12 py-10 md:py-24 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
          <main className="flex col-span-1 md:col-span-1 flex-col gap-4">
            <img src="/images/logo_black.svg" alt="" className="block w-8 object-contain md:w-14" />
            <div className="flex flex-col gap-2">
              <div className="text-xs lg:text-base text-gray-500 ">
                Counter Delivery, Carters Beach <br/> 
                PostCentre, Westport
              </div>
              {/* <div className="text-sm lg:text-base text-gray-500"> */}
              {/* </div> */}
            </div>
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-sm md:text-lg font-semibold">About</div>
            <div className="flex text-xs lg:text-base text-gray-500  flex-col gap-1 md:gap-2">
              <a href="#" className=" cursor-pointer hover:underline ">
                Company
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Team
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Careers
              </a>{" "}
              <a href="#" className=" cursor-pointer hover:underline">
                Blog
              </a>
            </div>
          </main>
          <main className="flex  flex-col gap-4">
            <div className="text-sm md:text-lg font-semibold">Support</div>
            <div className="flex  text-xs lg:text-base text-gray-500 flex-col gap-1 md:gap-2">
              <a href="#" className=" cursor-pointer hover:underline ">
                Help Center
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Cancellation Options
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Neighborhood Support
              </a>{" "}
              <a href="#" className=" cursor-pointer hover:underline">
                Trust & Safety
              </a>
            </div>
          </main>
          <main className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">

            <div className="text-sm md:text-lg font-semibold">Address</div>
            <div className="flex  flex-col  gap-2">
              <div className="text-xs lg:text-base text-gray-500  ">
                Counter Delivery, Carters Beach <br /> PostCentre, Westport
              </div>
            </div>
            </div>
            <div className="flex gap-4 md:gap-6  ">

          <img src="/images/sms.png" alt="" className="block  object-contain" />

          <img src="/images/fb_black.svg" alt="" className="block  object-contain" />
          <img src="/images/twitter_black.svg" alt="" className="block  object-contain" />
          <img src="/images/instagram_black.svg" alt="" className="block  object-contain" />
          </div>
          </main>
        </div>
        <ul className="flex md:flex-row flex-col list-disc text-gray-500 text-xs lg:text-base gap-1 items-center md:gap-6 md:ml-auto">
          <div className="">©Moment, LLC. All rights reserved.</div>
          <ul className="flex gap-2 md:gap-8 md:list-disc">
            <li>

             Terms & Conditions 
            </li>
             <li className=""> Privacy Policy </li></ul>
          
          
        </ul>
      </section>
    </>
  );
};

export default Footer;
