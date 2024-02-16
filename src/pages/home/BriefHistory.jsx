import gsap from "gsap";
import background from "../../assets/background.svg";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function BriefHistory() {
  const backgroundRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".briefHistory", {
      opacity: 0,
      x: -300,
      y: 300,
    });
    gsap.to(".briefHistory", {
      scrollTrigger: {
        trigger: ".sdfsdf",
        toggleActions: "restart none none none",
      },
      display: "block",
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
    });
    gsap.from(".background", {
      width: "100%",
    });
    gsap.to(".background", {
      scrollTrigger: {
        trigger: ".background",
        scrub: 1,
        toggleActions: "restart none none none",
      },
      width: "50%",
      duration: 1,
    });
  });

  return (
    <div
      ref={backgroundRef}
      className="py-16 flex px-32  gap-10 sdfsdf  justify-center items-center"
    >
      <img
        src={background}
        className=" h-[440px]  z-10 background object-cover"
        alt=""
      />
      <div className="w-[50%] hidden  briefHistory ">
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
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra aptent taciti sociosqu ad litora torquent per
          </p>
        </div>
      </div>
    </div>
  );
}
