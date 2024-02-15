import { useState } from "react";
import { GoArrowRight, GoArrowUp } from "react-icons/go";
import project1 from "../../assets/project1.svg";
import project2 from "../../assets/project2.svg";
import project3 from "../../assets/project3.svg";
import project4 from "../../assets/project4.svg";

export default function WhatWeDo() {
  const [selectedAccordian, setSelectedAccordian] = useState();
  const whatWeDo = [
    {
      id: 1,
      name: "Product Design",
      details: [
        {
          id: 1,
          name: "Brainstrom",
        },
        {
          id: 2,
          name: "User Mapping",
        },
        {
          id: 3,
          name: "Wireframing",
        },
        {
          id: 4,
          name: "Mockups",
        },
        {
          id: 5,
          name: "Deliver",
        },
      ],
    },
    {
      id: 2,
      name: "Web Applications",
      details: [
        {
          id: 1,
          name: "Brainstrom",
        },
        {
          id: 2,
          name: "User Mapping",
        },
        {
          id: 3,
          name: "Wireframing",
        },
        {
          id: 4,
          name: "Mockups",
        },
        {
          id: 5,
          name: "Deliver",
        },
      ],
    },
    {
      id: 3,
      name: "Mobile Applications",
      details: [
        {
          id: 1,
          name: "Brainstrom",
        },
        {
          id: 2,
          name: "User Mapping",
        },
        {
          id: 3,
          name: "Wireframing",
        },
        {
          id: 4,
          name: "Mockups",
        },
        {
          id: 5,
          name: "Deliver",
        },
      ],
    },
  ];
  const projectImage = [project1, project2, project3, project4];
  return (
    <div className="bg-[#1A1A1A] px-32 py-20">
      <h2 className="text-[#8CC3F2] font-normal text-xl leading-6">
        What we do
      </h2>
      <div className="flex flex-col gap-6 mt-10">
        {whatWeDo?.map((item) => {
          return (
            <div key={item?.id} className=" border-b border-[#f9f9f9]">
              <div className="flex items-center pb-6 text-white justify-between">
                <div className="flex items-center gap-8">
                  <div
                    className={`border ${
                      selectedAccordian === item?.id
                        ? "bg-[#AD961E] border-[#AD961E]"
                        : "border-white"
                    }  text-[50px]  rounded-full flex justify-center items-center w-[80px] h-[80px]`}
                  >
                    {item?.id}
                  </div>
                  <h1 className="text-[58px] ">{item?.name}</h1>
                </div>
                <div
                  onClick={() => {
                    setSelectedAccordian(item?.id);
                  }}
                  className="border-2 cursor-pointer border-white text-[50px] hover:text-[#1A1A1A] hover:bg-white  rounded-full flex justify-center items-center w-[80px] h-[80px]"
                >
                  {selectedAccordian === item?.id ? (
                    <GoArrowUp />
                  ) : (
                    <GoArrowRight />
                  )}
                </div>
              </div>
              {selectedAccordian === item?.id && (
                <div>
                  <div className="text-white mt-2 mb-10  flex justify-around">
                    <div className="border-b mt-2 absolute  w-full border-[#F2E28C] "></div>
                    {item?.details?.map((detail) => {
                      return (
                        <div
                          key={detail?.id}
                          className="flex flex-col justify-center  items-center gap-4 px-10"
                        >
                          <div className="w-4 h-4 rounded-full border-4  bg-[#1A1A1A] z-20 border-[#F2E28C]"></div>
                          <h1 className="text-[#F2E28C] mt-1 text-base">
                            {detail?.name}
                          </h1>
                          <p className="text-center text-[#E4E7EC] text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-4 mb-10">
                    <h1 className="text-base font-medium text-[#F2F4F7]">
                      PROJECTS
                    </h1>
                    <div className="grid grid-cols-4 gap-6">
                      {projectImage?.map((img) => {
                        return (
                          <img
                            className="w-full h-full object-cover"
                            key={img}
                            src={img}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
