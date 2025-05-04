import BorderedCard from "@/components/BorderedCard";

const BlogSection = () => {
  const highlights = [
    {
      id: "1",
      title: "Hello there",
      subtitle: "My subt1",
    },
    {
      id: "2",
      title: "heya",
      subtitle: "My subt2",
    },
    {
      id: "3",
      title: "homie",
      subtitle: "Mysub3",
    },
  ];
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-200 text-center">
            <span className="block">Blog Highlight</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          {highlights.map((element) => (
            <BorderedCard
              key={element.id}
              subtitle={element.subtitle}
              title={element.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
