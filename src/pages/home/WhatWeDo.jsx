import { GoArrowRight } from "react-icons/go";

export default function WhatWeDo() {
  const whatWeDo = [
    {
      id: 1,
      name: "Product Design",
    },
    {
      id: 2,
      name: "Web Applications",
    },
    {
      id: 3,
      name: "Mobile Applications",
    },
  ];
  return (
    <div className="h-screen  bg-[#1A1A1A] px-32 py-20">
      <h2 className="text-[#8CC3F2] font-normal text-xl leading-6">
        What we do
      </h2>
      <div className="flex flex-col gap-6 mt-10">
        {whatWeDo?.map((item) => {
          return (
            <div
              className="flex items-center pb-6 border-b border-[#f9f9f9] text-white justify-between"
              key={item?.id}
            >
              <div className="flex items-center gap-8">
                <div className="border border-white text-[50px]  rounded-full flex justify-center items-center w-[80px] h-[80px]">
                  {item?.id}
                </div>
                <h1 className="text-[58px] ">{item?.name}</h1>
              </div>
              <div className="border cursor-pointer border-white text-[50px] hover:text-[#1A1A1A] hover:bg-white  rounded-full flex justify-center items-center w-[80px] h-[80px]">
                <GoArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
