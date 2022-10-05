import React, { useState } from "react";
import TextBox, { TextArea } from "../../../components/textBox";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const CustomerForm = () => {
  const [value, setValue] = useState();

  return (
    <>
      <main className="flex flex-col font-primary gap-4 py-4 md:px-4 md:border-2 md:border-gray-200 rounded-2xl">
        <div className="grid grid-cols-2   gap-4">
          <TextBox placeholder={"Your first Name"} lable="First name" />
          <TextBox placeholder={"Your last Name"} lable="Last name" />
        </div>
        <div className="grid  lg:grid-cols-2 place-items-center gap-4 p- ">
          <TextBox placeholder={"Your email address"} lable="Email address" />

          <div className="flex w-full font-primary flex-col gap-1">
            <label>Phone number</label>
            <PhoneInput
              placeholder="8888888888"
              className="text-xs md:text-sm"
              international
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <TextArea placeholder={"Your message"} lable="Message" />
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
          Your information will be used to consider and fulfill your request,
          and will be handled pursuant to our Privacy Policy.
        </div>
        <button className="bg-secondary p-2 lg:p-3 xl:p-4 text-sm md:text-xl text-white font-medium rounded-lg w-full">
          Join waitlist
        </button>
      </main>
    </>
  );
};

export default CustomerForm;
