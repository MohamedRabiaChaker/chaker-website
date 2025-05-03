import BorderlessCard from "@/components/BorderlessCard";

const Features = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center">
            <span className="block text-gray-200">
              What can I do for you? Glad you asked.
            </span>
          </h2>
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <BorderlessCard
            img="/icons/pipeline.png"
            title="Build Data Pipelines"
            description="I build data pipelines that gather, clean, and organize your data so it flows smoothly and makes sense when you need it. Instead of searching through messy spreadsheets or disconnected tools, you'll have a clear, reliable stream of data your analysts will thank you for."
          />
          <div className="divider  lg:divider-horizontal"></div>
          <BorderlessCard
            img="/icons/architect.png"
            title="Design Data Systems"
            description="I’ll design the blueprint for how your business handles data—so it’s not just stored, but structured to actually work for you. No more digging through files or guessing; just clear, organized insights when you need them."
          />

          <div className="divider lg:divider-horizontal"></div>
          <BorderlessCard
            img="/icons/database.png"
            title="Manage Backend and Integration"
            description="I'll build the behind-the-scenes engine that makes your app or system run smoothly—crafting APIs, managing databases, and connecting all the moving parts. It’s about creating a solid, secure foundation so everything just works, even as your needs grow."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
