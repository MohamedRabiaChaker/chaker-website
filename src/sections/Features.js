import BorderlessCard from "@/components/BorderlessCard";

const Features = () => {
  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center">
            <span className="block">
              What can I do for you? Glad you asked.
            </span>
          </h2>
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <BorderlessCard
            img="/icons/pipeline.png"
            title="Lay Down Pipes"
            description="I’ll create seamless data pipelines that collect, clean, and organize your data, making it easy to access and use. This will ensure your decisions are powered by reliable, up-to-date information."
          />

          <BorderlessCard
            img="/icons/architect.png"
            title="Design Data Systems"
            description="I’ll design the blueprint for how your business handles data—so it’s not just stored, but structured to actually work for you. No more digging through files or guessing; just clear, organized insights when you need them."
          />

          <BorderlessCard
            img="/icons/pipeline.png"
            title="service 2 "
            description="test"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
