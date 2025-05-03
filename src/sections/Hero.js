import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full py-10">
      <div className=" relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src="/profile.jpg"
              alt="Avatar"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-6xl font-extrabold text-center">
            <span className="block text-gray-700">Mohamed Rabii Chaker</span>
            <span className="block text-3xl text-slate-500">
              Data Enthusiast - Linux Enjoyer - Continous Learner
            </span>
          </h1>
          <p className="mt-5 text-center text-gray-600">
            Welcome to my personal website, where I keep you up to date with me
            personally and professionally
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
