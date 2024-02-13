/* eslint-disable react/prop-types */
import { IoMdArrowForward } from "react-icons/io";

export default function Button({
  isArrow = true,
  className = "w-[220px]",
  buttonName,
  handleButtonClick,
}) {
  return (
    <button
      onClick={() => handleButtonClick()}
      className={`px-10 border   border-[#596273] text-[#596273] hover:bg-[#596273] hover:text-white cursor-pointer rounded-full   py-2 flex justify-center items-center gap-3 ${className}`}
    >
      {buttonName}
      {isArrow && <IoMdArrowForward size={22} />}
    </button>
  );
}
