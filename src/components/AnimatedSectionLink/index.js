import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function AnimatedSectionLink({ href, children, className }) {
  const router = useRouter();
  const ref = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    ref.current.classList.add("animate-fadeOut");
    setTimeout(() => {
      if (href.startsWith("#")) {
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
      ref.current.classList.remove("animate-fadeOut");
    }, 500);
  };

  return (
    <div ref={ref}>
      <a
        href={href}
        onClick={handleClick}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </a>
    </div>
  );
}
