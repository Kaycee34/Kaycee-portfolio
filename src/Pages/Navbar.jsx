import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div className="fixed top-0 left-0 w-full p-4 flex justify-between items-center backdrop-blur-xl bg-opacity-60 z-50">
      <div className="text-2xl font-bold custom-gradient-text">
        Kaycee.
      </div>
      <div className="flex ml-8">
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
