/* eslint-disable react/prop-types */
export default function InputField({ placeholder }) {
  return (
    <input
      type="text"
      className="h-11 px-4 border outline-none rounded-lg w-full"
      placeholder={placeholder}
    />
  );
}
