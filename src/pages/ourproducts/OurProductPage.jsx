import SummeryPart from "../../components/SummeryPart";
import Solution from "./Solution";

export default function OurProductPage() {
  return (
    <div className="flex flex-col gap-10">
      <Solution />
      <SummeryPart
        title1={"Avyaas"}
        message={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum libero et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdumlibero et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum"
        }
      />
    </div>
  );
}
