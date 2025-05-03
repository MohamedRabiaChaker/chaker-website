import Timeline from "@/components/Timeline";
import Button from "@/components/Button";
import Image from "next/image";

const ProfessionalExperience = () => {
  return (
    <div className="w-full py-10 bg-gray-200">
      <div className="relative flex justify-center items-center flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <h2 className="text-4xl font-bold text-center">
          <span className="block text-grey-600">Professional Timeline</span>
        </h2>
        <Timeline />
        <Button className="bg-slate-400 rounded hover:bg-slate-300 px-8 py-3">
          <Image width="24" height="24" src="/icons/download.png" alt="icon" />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Get my full Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfessionalExperience;
