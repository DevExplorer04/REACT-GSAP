import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="mt-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent animate-gradient">
          CapGemini
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="text-blue-600" />
        <FaGithub className="text-black-400" />
        <FaSquareXTwitter className="text-black-600" />
        <FaInstagram className="text-pink-600"/>
      </div>
    </nav>
  );
};

export default NavBar;
  