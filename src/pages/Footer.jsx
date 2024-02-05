import logo from "../../public/logo.png";
import footer from "../assets/footer.svg";

export default function Footer() {
  return (
    <div className="flex items-center flex-col gap-8">
      <img src={logo} alt="" />
      <p className="text-[#667085] w-[50%] text-sm font-normal text-center leading-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia velit interdum, ac aliquet odio
        mattis. Class aptent taciti sociosqu ad litora torquent per conubia
      </p>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3"></div>
        <p className="text-[#3E4784]">Anamnagar</p>
      </div>
      <img src={footer} alt="" />
    </div>
  );
}
