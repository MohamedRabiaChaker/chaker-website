import Image from "next/image";

const BorderlessCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-600 rounded-full">
        <Image width="48" height="48" src={img} alt="icon" />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className=" text-justify text-xl text-white">{description}</p>
    </div>
  );
};
export default BorderlessCard;
