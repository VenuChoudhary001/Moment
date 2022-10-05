import React, { useState } from "react";
import TabNav from "./tabNav";
import Image from "next/image";
import TabContent from "./tabContent";
const TABS = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <main className="container px-4 md:px-0 grid grid-cols-1 lg:grid-cols-7">
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col gap-6">
          <TabNav
            id={1}
            title={"Business"}
            des={
              "Be seen, be available, build your brand online. Create an online profile on our marketplace to get noticed by thousands of potential clients in your area."
            }
            icon={"briefcase"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className=" lg:hidden">
            <TabContent id={1} activeTab={activeTab}>
              <div className=" flex flex-col gap-6">
                <div className="grid gap-4 grid-cols-6">
                  <div className="col-span-2 h-[100px] md:h-[200px] lg:h-[302px] xl:h-[402px] relative">
                    <Image
                      src={"/images/tabs/1.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                    {/* <img src="/images/tabs/1.webp" alt="" className="block object-cover w-full" /> */}
                  </div>
                  <div className="relative  col-span-4 ">
                    <Image
                      src={"/images/tabs/2.webp"}
                      objectFit="cover"
                      layout="fill"
                    />
                    {/* <img src="/images/tabs/2.webp" alt="" className="block object-cover w-full" /> */}
                  </div>
                </div> 
                <div className="grid gap-4 grid-cols-6 h-[80px] md:h-[200px]">
                  <div className="col-span-4 lg:h-[302px] xl:h-[402px] relative">
                    <Image
                      src={"/images/tabs/3.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                    {/* <img src="/images/tabs/3.webp" alt="" className="block object-cover w-full " /> */}
                  </div>
                  <div className="relative col-span-2">
                    <Image
                      src={"/images/tabs/4.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                    {/* <img src="/images/tabs/4.webp" alt="" className="block object-cover h-full" /> */}
                  </div>
                </div>
              </div>
            </TabContent>
          </div>
          <TabNav
            id={2}
            title={"Expert"}
            des={
              "Be seen, be available, build your brand online. Create an online profile on our marketplace to get noticed by thousands of potential clients in your area."
            }
            icon={"medal"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="lg:hidden">
            <TabContent id={2} activeTab={activeTab}>
              <div className="lg:col-span-5  xl:col-span-5 grid grid-cols-6 gap-2 md:gap-6">
                <div className="col-span-2 gap-2 md:gap-6 flex flex-col">
                  <div className="lg:h-[272px] h-[80px] md:h-[200px] xl:h-[318px] relative">
                    <Image
                      src={"/images/tabs/5.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className=" lg:h-[350px] h-[120px] md:h-[180px] xl:h-[448px] relative">
                    <Image
                      src={"/images/tabs/7.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="col-span-4 flex flex-col gap-2 md:gap-6">
                  <div className="h-[100px] md:h-[220px] lg:h-[359px] xl:h-[438px] relative">
                    <Image
                      src={"/images/tabs/8.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 md:gap-6">
                    <div className="h-[100px] md:h-[150px] lg:h-[258px] xl:h-[328px] relative">
                      <Image
                        src={"/images/tabs/6.webp"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="xl:h-[328px] relative">
                      <Image
                        src={"/images/tabs/9.webp"}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabContent>
          </div>

          <TabNav
            id={3}
            title={"Instructor"}
            des={
              "Be seen, be available, build your brand online. Create an online profile on our marketplace to get noticed by thousands of potential clients in your area."
            }
            icon={"ranking"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="lg:hidden">
            <TabContent id={3} activeTab={activeTab}>
              <div className="lg:col-span-5 xl:col-span-5  grid grid-cols-7 gap-2 md:gap-6">
                <div className="col-span-3 relative h-[200px] md:h-[650px]">
                  <img
                    src="/images/tabs/12.webp"
                    alt=""
                    className="block object-cover w-full md:h-full "
                  />
                </div>
                <div className="col-span-4 flex flex-col h-[150px] gap-2 md:gap-6 md:h-[650px]">
                  <img
                    src="/images/tabs/10.webp"
                    alt=""
                    className="block h-full object-cover"
                  />
                  <img
                    src="/images/tabs/11.webp"
                    alt=""
                    className="block h-full object-cover"
                  />
                </div>
              </div>
            </TabContent>
          </div>
        </div>
        <div className="hidden lg:col-span-5 xl:col-span-5 lg:block">
          <TabContent id={1} activeTab={activeTab}>
            <div className=" flex flex-col gap-6">
              <div className="grid gap-4 grid-cols-6">
                <div className="col-span-2 lg:h-[302px] xl:h-[402px] relative">
                  <Image
                    src={"/images/tabs/1.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <img src="/images/tabs/1.webp" alt="" className="block object-cover w-full" /> */}
                </div>
                <div className="relative col-span-4 ">
                  <Image
                    src={"/images/tabs/2.webp"}
                    objectFit="cover"
                    layout="fill"
                  />
                  {/* <img src="/images/tabs/2.webp" alt="" className="block object-cover w-full" /> */}
                </div>
              </div>
              <div className="grid gap-4 grid-cols-6 ">
                <div className="col-span-4 lg:h-[302px] xl:h-[402px] relative">
                  <Image
                    src={"/images/tabs/3.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <img src="/images/tabs/3.webp" alt="" className="block object-cover w-full " /> */}
                </div>
                <div className="relative col-span-2">
                  <Image
                    src={"/images/tabs/4.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* <img src="/images/tabs/4.webp" alt="" className="block object-cover h-full" /> */}
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id={2} activeTab={activeTab}>
            <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-6 gap-6">
              <div className="col-span-2 gap-6 flex flex-col">
                <div className="lg:h-[272px] xl:h-[318px] relative">
                  <Image
                    src={"/images/tabs/5.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className=" lg:h-[350px] xl:h-[448px] relative">
                  <Image
                    src={"/images/tabs/7.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="col-span-4 flex flex-col gap-6">
                <div className="h-[359px] xl:h-[438px] relative">
                  <Image
                    src={"/images/tabs/8.webp"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="lg:h-[258px] xl:h-[328px] relative">
                    <Image
                      src={"/images/tabs/6.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="xl:h-[328px] relative">
                    <Image
                      src={"/images/tabs/9.webp"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabContent>
          <TabContent id={3} activeTab={activeTab}>
            <div className="lg:col-span-5 xl:col-span-5 h-[560px]  grid grid-cols-7 gap-6">
              <div className="col-span-3 relative w-full ">
                <img
                  src="/images/tabs/12.webp"
                  alt=""
                  className="block object-cover h-full xl:w-full "
                />
              </div>
              <div className="col-span-4 flex flex-col gap-6 ">
                <img
                  src="/images/tabs/10.webp"
                  alt=""
                  className="block w-full h-full object-cover"
                />
                <img
                  src="/images/tabs/11.webp"
                  alt=""
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </TabContent>
        </div>
      </main>
    </>
  );
};

export default TABS;
