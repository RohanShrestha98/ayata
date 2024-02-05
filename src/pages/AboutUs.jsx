import { IoMdArrowForward } from "react-icons/io";

export default function AboutUs() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex  justify-between items-start px-32  gap-4 ">
        <div className="w-[30%]  h-[400px]">
          <p className="text-[#667085] font-normal">About us</p>
        </div>
        <div className="w-[70%]  h-[400px] flex flex-col gap-10">
          <h1 className="font-normal text-5xl text-[#293056] leading-tight">
            Ayata was created in order to provide a new paradigm for digital
            knowledge sharing.
          </h1>
          <p className="leading-8 w-[75%] text-[#667085]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="px-10 border border-[#596273] text-[#596273] hover:bg-[#596273] hover:text-white cursor-pointer rounded-full w-[220px] py-2 flex justify-center items-center gap-3">
            Learn more <IoMdArrowForward size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}
