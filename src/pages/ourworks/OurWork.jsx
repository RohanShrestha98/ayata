import Heading from "../../components/Heading";
import DescriptionText from "../../components/DescriptionText";
import mobile from "../../assets/mobile.svg";
import ourTeam from "../../assets/ourteam.svg";
import ourTeam2 from "../../assets/ourteam2.svg";

export default function OurWork() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-8">
        <Heading title={"Mobile Application Development"} />
        <DescriptionText
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <img src={ourTeam} className="h-full object-cover w-full" alt="" />
          <div className="flex flex-col gap-4">
            <img src={ourTeam2} alt="" />
            <img src={ourTeam2} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-start ">
        <img className="z-10 w-[260px]" src={mobile} alt="" />
        <img className="-ml-20 w-[260px] pt-10 " src={mobile} alt="" />
      </div>
    </div>
  );
}
