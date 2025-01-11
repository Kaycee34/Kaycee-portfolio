import { useState } from "react";
import { Link } from "react-scroll";

const DesktopNavbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className="flex space-x-8">
      <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-50}
        className={`text-white cursor-pointer py-2 ${
          activeLink === "home"
            ? "border-b-4 border-gradient-to-r from-purple-500 to-pink-500"
            : ""
        }`}
        onSetActive={() => handleSetActive("home")}
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-50}
        className={`text-white cursor-pointer py-2 ${
          activeLink === "about"
            ? "border-b-4 border-gradient-to-r from-purple-500 to-pink-500"
            : ""
        }`}
        onSetActive={() => handleSetActive("about")}
      >
        About
      </Link>
      <Link
        to="portfolio"
        smooth={true}
        duration={500}
        offset={-50}
        className={`text-white cursor-pointer py-2 ${
          activeLink === "portfolio"
            ? "border-b-4 border-gradient-to-r from-purple-500 to-pink-500"
            : ""
        }`}
        onSetActive={() => handleSetActive("portfolio")}
      >
        Portfolio
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-50}
        className={`text-white cursor-pointer py-2 ${
          activeLink === "contact"
            ? "border-b-4 border-gradient-to-r from-purple-500 to-pink-500"
            : ""
        }`}
        onSetActive={() => handleSetActive("contact")}
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNavbar;
