/* eslint-disable react/prop-types */
import DescriptionText from "../../components/DescriptionText";
export default function AboutProject({ isReverse, title, description, img }) {
  return (
    <div className={`flex ${isReverse && "flex-row-reverse"}  gap-6`}>
      <img className="w-3/5  object-cover" src={img} alt="" />
      <div className="flex w-2/5 flex-col gap-4 mt-4">
        <h1 className="text-[#363F72] font-semibold text-2xl">{title}</h1>
        <DescriptionText
          className={"leading-loose"}
          description={description}
        />
      </div>
    </div>
  );
}
