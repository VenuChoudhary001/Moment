import React, { useState } from "react";
import Modal from "../../../components/modal";
import Header from "../header";
import CustomerForm from "./form";
import SideBar from "./sideBar";

const Hero = () => {
    const [confirm,setConfirm]=useState(false);

    const [data,setData]=useState({});

  return (
    <>
      <section className="grid md:grid-cols-12 font-primary gap-">
        <div className=" md:col-span-8 flex flex-col gap-4 m-auto w-[100vw]  max-w-[460px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px]  m-auto ">
          <Header />
          <main className="px-4 flex flex-col gap-2 md:gap-6">
            <div className="flex gap-2 md:gap-3 cursor-pointer text-xs max-w-min  text-secondary">
              <img
                src="/images/arrow-left.png"
                alt=""
                className="block w-3 object-contain text-secondary"
              />
              Back
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-3xl md:text-3xl lg:text-5xl text-primary">
                Join Moment Today!
              </div>
              <div className=" hidden md:block text-black-100/80 text-sm lg:text-xl">
                Be the first to experience our products and receive perks or
                discounts.
              </div>
            </div>
            <CustomerForm  data={data} setData={data} />
          </main>
        </div>
        <div className="col-span-4 hidden md:block bg-cyan-0">
          <SideBar />
        </div>
      </section>
     {confirm &&  <Modal/>}
    </>
  );
};

export default Hero;
