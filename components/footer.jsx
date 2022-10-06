import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="container px-4 md:px-0  font-primary flex flex-col gap-12 py-10 md:py-24 ">
        <div className="grid grid-cols-1 items-start md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-12">
          <main className="flex col-span-1 md:col-span-1 items-start justify-start flex-col gap-">
            {/* <img src="/images/logo_black.svg" alt="" className="block w-8 object-contain md:w-14" /> */}
            {/* <div className="flex flex-col gap-2"> */}
            <Image
              src={"/images/logo_text_black.png"}
              layout="intrinsic"
              width={168}
              height={68}
              objectFit="cover"
            />
            <div className="text-sm max-w-[280px] lg:text-base text-black-100 font-medium md:max-w-[240px] ">
            {`  Moment is the platform where anyone can book experiences they love
              and learn from the world's best.`}
            </div>
            {/* <div className="text-sm lg:text-base text-gray-500"> */}
            {/* </div> */}
            {/* </div> */}
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-sm md:text-xl font-semibold">Company</div>
            <div className="flex text-xs lg:text-base text-gray-500  flex-col gap-1 md:gap-2">
              <a href="#" className=" cursor-pointer hover:underline ">
                About
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Blog
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Contact us
              </a>{" "}
            </div>
          </main>
          <main className="flex  flex-col gap-4">
            <div className="text-sm md:text-xl font-semibold">Product</div>
            <div className="flex  text-xs lg:text-base text-gray-500 flex-col gap-1 md:gap-2">
              <a href="#" className=" cursor-pointer hover:underline ">
                Customer
              </a>
              <a href="#" className=" cursor-pointer hover:underline">
                Business
              </a>
            </div>
          </main>
          <main className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm md:text-xl font-semibold">Contact</div>
              <div className="flex  flex-c gap-3">
                <img
                  src="/images/sms_outline.png"
                  alt=""
                  className="block  object-contain"
                />

                <div className="text-xs  lg:text-base text-gray-500  ">
                  hello@momentbooking.com
                </div>
              </div>
              <div className="flex  flex-c gap-3">
                <img
                  src="/images/phone.png"
                  alt=""
                  className="block  object-contain"
                />

                <div className="text-xs lg:text-base text-gray-500  ">
                  (972) 12-5673
                </div>
              </div>
            </div>
            {/* <div className="flex gap-4 md:gap-6  ">
              <img
                src="/images/sms.png"
                alt=""
                className="block  object-contain"
              />

              <img
                src="/images/fb_black.svg"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/twitter_black.svg"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/instagram_black.svg"
                alt=""
                className="block  object-contain"
              />
            </div> */}
          </main>
          <main className="flex flex-col gap-4">
            <div className="text-sm md:text-xl font-semibold">Address</div>
            <div className="flex text-xs lg:text-base text-black  flex-col gap-1 md:gap-2">
              539 W. Commerce St. #1349
              <br />
              Dallas, TX 75208
            </div>
            <div className="grid grid-cols-6 md:grid-cols-3 place-items-center max-w-[300px] m-auto md:mx-0 md:max-w-[150px] gap-6">
              <img
                src="/images/sms.png"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/fb_black.svg"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/twitter_black.svg"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/instagram_black.svg"
                alt=""
                className="block  object-contain"
              />{" "}
              <img
                src="/images/linkedin.png"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/youtube.png"
                alt=""
                className="block  object-contain"
              />
            </div>
          </main>
        </div>
        <ul className="flex md:flex-row flex-col list-disc text-black text-xs lg:text-base gap-1 items-center md:gap-6 items-center justify-center">
          <div className="">©Moment, LLC. All rights reserved.</div>
          <ul className="flex gap-2 md:gap-8 ">
            <li>Terms & Conditions</li>
            <li className=""> Privacy Policy </li>
          </ul>
        </ul>
      </section>
    </>
  );
};

export default Footer;
