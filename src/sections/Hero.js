import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger enter transition after mount
  }, []);
  const toggleMenu = () => setMenuVisibility(!showMenu);
  const { t } = useTranslation();

  const transitionProperties = {
    enter: "transition ease-out duration-1200",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
  };

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <header className="flex items-center justify-between space-x-3">
          <Link href="/" className="text-2xl text-blue-600 font-bold">
            Mohamed Rabii Chaker
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {!showMenu ? (
              <Bars3Icon className="w-8 h-8" />
            ) : (
              <XMarkIcon className="w-8 h-8" />
            )}
          </button>
          <div
            className={[
              "items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3",
              showMenu
                ? "absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5"
                : "hidden",
            ].join(" ")}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <a href="#about" className="px-5 py-2 rounded hover:bg-gray-100">
                {t("common.label.about")}
              </a>
              <a
                href="#projects"
                className="px-5 py-2 rounded hover:bg-gray-100"
              >
                {t("common.label.projects")}
              </a>
              <a href="#blog" className="px-5 py-2 rounded hover:bg-gray-100">
                {t("common.label.blog")}
              </a>
              <a
                href="#contacts"
                className="px-5 py-2 rounded hover:bg-gray-100"
              >
                {t("common.label.contacts")}
              </a>
            </nav>
          </div>
        </header>
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
            <span className="block">Mohamed Rabii Chaker</span>
            <span className="block text-4xl text-blue-600">
              Data Enthusiast - Linux Enjoyer - Continous Learner
            </span>
          </h1>
          <p className="mt-5 text-center text-gray-600">
            Welcome to my personal website, where I keep you up to date with me
            personally and professionally
          </p>
          <Transition show={show} {...transitionProperties}></Transition>
        </div>
      </div>
    </div>
  );
};

export default Hero;
