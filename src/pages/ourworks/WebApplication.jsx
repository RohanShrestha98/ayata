import Heading from "../../components/Heading";
import DescriptionText from "../../components/DescriptionText";
import project1 from "../../assets/client1.png";
import project2 from "../../assets/client2.png";
import laptop from "../../assets/laptop.svg";

export default function WebApplication() {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-8">
        <Heading title={"Web Application Development"} />
        <DescriptionText
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"
          }
        />
        <div className="grid grid-cols-2 gap-4">
          <img src={project1} className="h-full object-cover w-full" alt="" />
          <img src={project2} className="h-full object-cover w-full" alt="" />
        </div>
      </div>
      <div>
        <img className="h-full object-cover w-full " src={laptop} alt="" />
      </div>
    </div>
  );
}
