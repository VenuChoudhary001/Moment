import Image from "next/image";
import React from "react";
import Button from "../../components/button";

const Section5 = () => {
  return (
    <>
      <section className="container  px-4 md:px-0 font-primary gap-2 grid md:grid-cols-2 place-items-center">
        <div className="flex flex-col md:items-start items-center justify-start gap-8">
          <div className="md:hidden block">
            <Image
              layout="intrinsic"
              width={800}
              height={700}
              src="/images/3.webp"
              alt=""
            />
          </div>
          <div className="text-3xl text-center md:text-left lg:text-4xl text-black xl:text-5xl lg:max-w-[600px] leading-none leading-md lg:leading-[45px] xl:leading-[60px]">
            Instructor lead sessions either 1:1 or group, all currated just for
            you.
          </div>
          <Button
            placeholder="Join waitlist"
            bgColor="bg-primary"
            textColor="text-white"
          />
        </div>
        <div className="hidden md:block">
          <Image
            layout="intrinsic"
            width={600}
            height={500}
            src="/images/3.webp"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Section5;
