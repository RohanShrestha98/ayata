import { GoArrowRight } from "react-icons/go";

export default function ContactUs() {
  return (
    <div className="h-screen grid grid-cols-2 gap-20  px-32 py-24">
      <div className=" flex flex-col gap-12">
        <h1 className="text-[92px] font-semibold leading-none text-[#293056]">
          Let’s start <br /> something <br /> <i>together</i>
        </h1>
        <p className="text-[#667085] text-base font-normal">
          Secure your connected life with the one solution that provides you
          with the greatest digital security and a great user experience.
        </p>
        <div className="flex items-center   ">
          <div className="flex items-center justify-center w-[240px] py-2 border-[#596273] hover:bg-[#596273] hover:text-white rounded-full cursor-pointer border gap-3 text-[#596273]">
            hi@ayata.com.np <GoArrowRight size={20} />
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
