/* eslint-disable react/prop-types */

export default function Header({ title, description, className }) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center  ">
      <h1 className={`font-medium text-5xl text-[#293056] ${className}`}>
        {title}
      </h1>
      <p
        className={`text-[#667085]  text-center leading-8 font-normal w-[40%]  ${className}`}
      >
        {description}
      </p>
    </div>
  );
}
