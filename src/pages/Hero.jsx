import circle from "../assets/circle.svg";
export default function Hero() {
  return (
    <div className="px-32">
      <div className="h-[84vh] relative flex flex-col items-center justify-center">
        <h1 className="text-[200px] text-center text-[#F7F7F7E5]">
          Ayata Inc.
        </h1>
        <img src={circle} className="absolute" alt="" />
        <p className="text-[#293056] absolute font-medium text-xl">
          INTO THE FUTURE
        </p>
      </div>
      <div className="flex text-[#667085] text-xs bottom-0 items-center justify-between">
        <div className="">— © 2024 by Ayata. All rights reserved.</div>
        <div className="flex items-center gap-2">
          <p>Discover more</p>
          <div className="w-5 h-7 flex justify-center items-start rounded-full border-[#293056] border">
            <div className="h-3 border-l border-[#293056]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
