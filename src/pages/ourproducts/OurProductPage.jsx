import SummeryPart from "../../components/SummeryPart";
import NumbersAchieved from "../aboutUs/NumbersAchieved";
import KeyWords from "./KeyWords";
import Medicord from "./Medicord";
import ProductPicutres from "./ProductPicutres";
import Revolution from "./Revolution";
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
      <KeyWords/>
      <ProductPicutres/>
      <NumbersAchieved/>
      <Revolution/>
      <Medicord/>
    </div>
  );
}
