import React from "react";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";

export default function InternationalProjects() {
  const clientImgList = [client1, client2, client3, client4];
  return (
    <div className="flex gap-5 px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4 py-10 bg-[#1F1F1F]">
      <div className="flex flex-col gap-[18px]">
        <div className="text-white flex flex-col gap-6 h-[240px]">
          <h1 className=" font-bold leading-snug text-4xl">
            Major International <br /> Projects
          </h1>
          <p className=" leading-normal w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. libero
            et Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <img
          className="rounded-lg h-[240px] object-cover"
          src={client3}
          alt=""
        />
      </div>
      <div className="grid grid-cols-2 gap-[18px]">
        {clientImgList.map((item) => {
          return (
            <img
              className="rounded-lg h-[240px] object-cover"
              src={item}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}
