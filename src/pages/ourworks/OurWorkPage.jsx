import Heading from "../../components/Heading";
import DescriptionText from "../../components/DescriptionText";
import mobile from "../../assets/mobile.svg";

export default function OurWorkPage() {
  return (
    <div className="px-32 py-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <Heading title={"Mobile Application Development"} />
          <DescriptionText
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"
            }
          />
        </div>
        <div className="flex justify-end p-0  ">
          <img className="z-10 " src={mobile} alt="" />
          <img className="-ml-20 pt-20 " src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
}
