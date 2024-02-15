import lineBackground from "../assets/linebackground.svg";
// import Button from "../../components/Button";

export default function SummeryPart({title1, title2, buttonName, message, className, noImage}) {
  return (
    <div className={`relative h-[80vh] flex items-center overflow-hidden px-32 gap-2 ${className}`}>
      <div className="w-[60%] flex flex-col gap-6">
        <h1 className="text-[#293056] font-bold leading-snug text-6xl">
          {title1} <br />{" "}
          <span className="text-[#667085]">{title2}</span>
        </h1>
        <p className="text-[#667085] leading-normal ">
          {message}
        </p>
        {/* <Button buttonName={"Send your CV"} width={240} /> */}
      </div>
      {!noImage &&
        <img className=" absolute top-0 right-0" src={lineBackground} alt="" />
      }
    </div>
  );
}
6;
