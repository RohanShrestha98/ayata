import background from "../assets/background.svg";
export default function BriefHistory() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 px-32  gap-10 ">
        <img src={background} className="w-full object-cover" alt="" />
        <div className="flex flex-col gap-10">
          <h1 className="font-normal text-5xl text-[#293056] leading-tight">
            Ayata <br /> Incorporation
          </h1>
          <div className="">
            <h2 className="text-[#4E5BA6] text-base font-medium mb-4">
              Brief History
            </h2>
            <p className="leading-8 w-[85%] text-sm text-[#667085]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra aptent taciti sociosqu ad litora torquent per
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
