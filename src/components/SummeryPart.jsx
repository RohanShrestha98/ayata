/* eslint-disable react/prop-types */
import lineBackground from "../assets/linebackground.svg";
// import Button from "../../components/Button";

export default function SummeryPart({
  title1,
  title2,
  buttonName,
  message,
  className,
  noImage,
  aboutUs,
}) {
  return (
    <div
      className={`relative h-[80vh] flex items-center overflow-hidden px-32 xl:px-24 lg:px-16 ml:px-10 sm:px-4 gap-2 ${className}`}
    >
      <div className="w-[60%] z-20 flex flex-col gap-6">
        {aboutUs && <p className="text-[#667085] text-base"> About us</p>}
        <h1 className={`text-[#293056] font-bold leading-snug text-6xl ${className}`}>
          {title1} <br /> <span className="text-[#667085]">{title2}</span>
        </h1>
        <p className="text-[#667085] leading-normal ">{message}</p>
        {/* <Button buttonName={"Send your CV"} width={240} /> */}
      </div>
      {!noImage && (
        <img className=" absolute top-0 right-0" src={lineBackground} alt="" />
      )}
    </div>
  );
}
6;
