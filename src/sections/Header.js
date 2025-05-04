import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Header = () => {
  const toggleMenu = () => setMenuVisibility(!showMenu);
  const [showMenu, setMenuVisibility] = useState(false);
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-gray-200 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-10 mx-auto space-y-5 w-full md:w-3/4">
        <Link href="/" className="text-2xl text-slate-500 mt-5 mb-3 font-bold">
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
            "md:flex-row md:flex md:items-center md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3 md:justify-center",
            showMenu
              ? "absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5"
              : "hidden",
          ].join(" ")}
        >
          <nav className="flex flex-col items-center w-full space-x-0 space-y-0 text-center mb-3 md:space-y-0 md:space-x-3 md:flex-row">
            <a href="#about" className="px-5 py-2 rounded hover:bg-gray-100">
              {t("common.label.about")}
            </a>
            <a href="#projects" className="px-5 py-2 rounded hover:bg-gray-100">
              {t("common.label.projects")}
            </a>
            <a href="#blog" className="px-5 py-2 rounded hover:bg-gray-100">
              {t("common.label.blog")}
            </a>
            <a href="#contacts" className="px-5 py-2 rounded hover:bg-gray-100">
              {t("common.label.contacts")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
