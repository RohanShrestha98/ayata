/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useRef } from "react";
>>>>>>> 14b971d12390e355fb8acf634177454bd1f881b0
import DescriptionText from "../../components/DescriptionText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function AboutProject({ isReverse, title, description, img }) {
<<<<<<< HEAD
  const navigate = useNavigate()
=======
  const aboutProjectRef = useRef();
  useGSAP(() => {
    gsap.to(".arrowHover", {
      // display: "flex",
      duration: 3,
    });
  });

>>>>>>> 14b971d12390e355fb8acf634177454bd1f881b0
  return (
    <div
      ref={aboutProjectRef}
      className={`flex ${
        isReverse && "flex-row-reverse sm:flex-row"
      } sm:flex-col  gap-6 `}
    >
<<<<<<< HEAD
      <img
        onClick={() => navigate("/project-summary")}
        className="w-3/5 md:w-1/2 sm:w-full  object-cover"
        src={img}
        alt=""
      />
=======
      <div className="relative w-3/5 md:w-1/2 sm:w-full ">
        <img className="w-full  object-cover" src={img} alt="" />
        <div className="absolute top-0 w-full h-full hover:bg-blue-800 z-20 opacity-25 rounded-lg"></div>
      </div>

>>>>>>> 14b971d12390e355fb8acf634177454bd1f881b0
      <div className="flex w-2/5 md:w-1/2 sm:w-full flex-col gap-4 mt-4">
        <h1 className="text-[#363F72] font-semibold text-2xl">{title}</h1>
        <DescriptionText
          className={"leading-loose"}
          description={description}
        />
      </div>
    </div>
  );
}
