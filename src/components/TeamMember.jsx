/* eslint-disable react/prop-types */

export default function TeamMember({ data }) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-4 sm:gap-2">
      {data?.map((team) => {
        return (
          <div
            key={team?.id}
            className="flex flex-col items-center mb-4 sm:mb-2"
          >
            <img
              src={team?.img}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
            <h1 className="mt-2 uppercase text-[#5E5555] text-[13px] font-medium">
              {team?.name}
            </h1>
            <h1 className="text-[#999999] text-[13px] ">
              {team?.positionName}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
