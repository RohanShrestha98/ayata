import InputField from "../../components/InputField";
import SummeryPart from "../../components/SummeryPart";
import Map from "./Map";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10 ">
      {" "}
      <SummeryPart
        title1={"Contact"}
        title2={"Ayata Incorporation"}
        className={"h-[50vh] w-[90%]"}
        message={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. libero et"
        }
      />
      <div className="px-32 py-20">
        <div className="flex ">
          <div className="w-3/5 flex flex-col gap-2">
            <h1 className="text-[#193E4D] text-2xl font-medium ">
              Locate us on map
            </h1>
            <p className="text-[#858585]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet
            </p>
            <Map />
          </div>
          <div className="w-2/5">
            <div className="flex w-full flex-col gap-3 px-2 py-2">
              <h1 className="text-[#193E4D] text-2xl font-medium ">
                Contact us form
              </h1>
              <p className="text-[#858585]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet
              </p>
              <InputField placeholder={"Your Name"} />
              <InputField placeholder={"Position"} />
              <InputField placeholder={"Your Email"} />
              <InputField placeholder={"Contact Number"} />
              <textarea
                id=""
                cols="30"
                rows="6"
                placeholder="Your message to us"
                className="border outline-none min-h-20 rounded-lg px-4 py-2"
              ></textarea>
              <div className="flex items-center justify-center  py-2 border-[#4E5BA6] bg-[#4E5BA6] hover:bg-white text-white rounded-full cursor-pointer border gap-3 hover:text-[#4E5BA6]">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
