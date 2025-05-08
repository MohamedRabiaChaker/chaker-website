import Image from "next/image";

const BorderedCard = ({ title, subtitle, cover, onClick }) => {
  return (
    <div
      className=" w-80 h-100 p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2"
      onClick={() => {
        onClick();
      }}
    >
      <div className="relative w-full h-40 bg-gray-400 rounded-lg ">
        <figure>
          <Image src={cover} alt="banner" fill />
        </figure>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-400">{subtitle}</h3>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default BorderedCard;
