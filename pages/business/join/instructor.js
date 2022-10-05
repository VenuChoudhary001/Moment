import React, { useState } from "react";
import Header from "../../../sections/join-us/header";
import TextBox, { CustomSelect } from "../../../components/textBox";
import { TextArea } from "../../../components/textBox";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";
const Expert = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <Header />
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
            <div className="text-primary  font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Join Moment as an Instructor
            </div>
          </div>
          <main className="flex flex-col font-primary gap-4 py-4 md:px-4 md:border-2 md:border-gray-200 rounded-2xl">
            <div className="flex gap-2">
              <img
                src="/images/instructor.webp"
                alt=""
                className="block h-[100px] rounded"
              />
              <div className="flex flex-col gap-1 max-w-[600px]">
                <div className="text-primary font-medium text-base md:text-2xl">
                 Instructor account
                </div>
                <div className="text-xs md:text-sm text-black-100">
                  Tell us a little about yourself. We’ll use this to review your
                  application and notify you when we’re live!
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2   gap-4">
              <TextBox placeholder={"Your first Name"} lable="First name" />
              <TextBox placeholder={"Your last Name"} lable="Last name" />
            </div>
            <div className="grid  lg:grid-cols-2 place-items-center gap-4 p- ">
              <TextBox
                placeholder={"Your email address"}
                lable="Email address"
              />

              <div
                className="flex w-full font-primary flex-col gap-1"
              >
                <label className="text-xs md:text-base">Phone number</label>
                <PhoneInput
                  placeholder="8888888888"
                  className="text-xs"
                  international
                  value={value}
                  onChange={setValue}
                />
              </div>
              <TextBox
                placeholder={"Your first name"}
                lable="Instructor name (your brand name)"
              />
              <CustomSelect placeholder={"Select your instructor type"} lable="Your instructor type" />
            </div>

            <TextArea
              placeholder={"Describe your expertise"}
              lable="Describe your expertise"

            />
            <div className="flex gap-2 text-base md:text-xl font-medium">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-6 h-6 rounded appearance-none checked:bg-secondary border-2 border-secondary"
                required
              />
              Keep me up to date on Moment
            </div>
            <div className="text-black-100 text-xs md:text-sm lg:text-base max-w-[500px]">
              Your information will be used to consider and fulfill your
              request, and will be handled pursuant to our Privacy Policy.
            </div>
            <button className="bg-secondary p-2 lg:p-3 xl:p-4 text-sm md:text-xl text-white font-medium rounded-lg w-full">
              Join waitlist
            </button>
          </main>
        </div>
      </div>
    </>
  );
};

export default Expert;
