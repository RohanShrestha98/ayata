import AboutProject from "./AboutProject";
import OurWork from "./OurWork";
import dishome from "../../assets/dishome.svg";
import AllProjects from "../../components/AllProjects";
import WebApplication from "./WebApplication";
import DescriptionText from "../../components/DescriptionText";
import Button from "../../components/Button";

export default function OurWorkPage() {
  return (
    <div className="px-32 py-16 flex flex-col gap-24 ">
      <OurWork />
      <AboutProject
        img={dishome}
        title={"DishHome Mobile Application"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AboutProject
        isReverse
        img={dishome}
        title={"DishHome Mobile Application"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AboutProject
        img={dishome}
        title={"DishHome Mobile Application"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AboutProject
        img={dishome}
        title={"DishHome Mobile Application"}
        isReverse
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AllProjects title={"All Mobile-based Projects"} />
      <WebApplication />
      <AboutProject
        img={dishome}
        title={"DishHome Web Application"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AboutProject
        isReverse
        img={dishome}
        title={"DishHome Web Application"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />
      <AllProjects title={"All Web-based Projects"} />
      <div className="flex flex-col gap-4">
        <h1 className="text-[#363F72] font-semibold text-2xl">
          Product Design
        </h1>
        <DescriptionText
          className={"leading-loose w-1/2"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"
          }
        />
        <AllProjects />
      </div>
      <div className="flex flex-col gap-12 items-center">
        <h1 className="text-5xl text-center text-[#293056] leading-snug">
          Have a project in mind? <br /> Lets collaborate
        </h1>
        <Button buttonName={"hi@ayata.com.np"} width={240} />
      </div>
    </div>
  );
}
