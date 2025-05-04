const BorderedCard = ({ title, subtitle }) => {
  return (
    <div className="p-5 space-y-5 transition rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2">
      <div className="w-full h-40 bg-gray-400 rounded-lg animate-pulse" />
      <div>
        <h3 className="text-lg font-bold text-gray-400">{subtitle}</h3>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default BorderedCard;
