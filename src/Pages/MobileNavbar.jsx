import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing Lucide icons
import { Link } from "react-scroll";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Menu Icon */}
      <div className="lg:hidden p-4" onClick={toggleSidebar}>
        {isOpen ? (
          <X size={24} className="text-white cursor-pointer" />
        ) : (
          <Menu size={24} className="text-white cursor-pointer" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-customBlue bg-opacity-80 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <X size={24} className="text-white cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex flex-col items-center space-y-6 mt-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white text-xl cursor-pointer"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white text-xl cursor-pointer"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white text-xl cursor-pointer"
            onClick={toggleSidebar}
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white text-xl cursor-pointer"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
