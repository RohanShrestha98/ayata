/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import DescriptionText from "../../components/DescriptionText";
export default function AboutProject({ isReverse, title, description, img }) {
  const navigate = useNavigate()
  return (
    <div
      className={`flex ${
        isReverse && "flex-row-reverse sm:flex-row"
      } sm:flex-col  gap-6 `}
    >
      <img
        onClick={() => navigate("/project-summary")}
        className="w-3/5 md:w-1/2 sm:w-full  object-cover"
        src={img}
        alt=""
      />
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
