import { FaBlogger, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import LinkIconButton from "@/components/LinkIconButton";
import { sendEvent } from "@/lib/analytics";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="relative flex items-center flex-col md:mx-auto md:w-3/4">
        <footer className="flex flex-col items-center justify-center py-5 space-x-0 space-y-3 border-b md:flex-row md:space-y-0 md:space-x-3">
          <div className="flex items-center justify-center w-full">
            <LinkIconButton
              href="https://github.com/MohamedRabiaChaker"
              icon={FaGithub}
              label="GitHub"
              onClick={() => {
                sendEvent("visitGithub");
              }}
            />
            <div className="divider divider-neutral divider-horizontal "></div>
            <LinkIconButton
              href="https://linkedin.com/in/chakerrabia/"
              icon={FaLinkedin}
              label="LinkedIn"
              onClick={() => {
                sendEvent("visitLinkedIn");
              }}
            />
            <div className="divider divider-neutral divider-horizontal "></div>
            <LinkIconButton
              href="mailto:chakerrabia9@gmail.com"
              icon={IoIosMailOpen}
              label="email"
              onClick={() => {
                sendEvent("sendEmail");
              }}
            />
            <div className="divider divider-neutral divider-horizontal "></div>
            <LinkIconButton
              href="/blog"
              icon={FaBlogger}
              label="Blog"
              onClick={() => {
                sendEvent("sendEmail");
              }}
            />
          </div>
        </footer>
        <p className="py-5 text-center text-gray-400">
          &copy; Mohamed Rabii Chaker {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  );
};

export default Footer;
