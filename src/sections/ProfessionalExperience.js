import Timeline from "@/components/Timeline";
import Button from "@/components/Button";

const ProfessionalExperience = () => {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <h2 className="text-4xl font-bold text-center">
          <span className="block text-grey-600">Professional Timeline</span>
        </h2>
        <Timeline />
        <Button />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
