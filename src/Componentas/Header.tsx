import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Set background to white when scrolled
    } else {
      setIsScrolled(false); // Keep transparent background at the top
    }
  };

  // UseEffect hook to listen to scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-4 z-10 transition-all duration-0 ease-in-out ${
        isScrolled
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex gap-12 justify-start pl-9">
        <div
          className={`font-bold text-2xl py-0 px-0 transition-colors duration-1000 ease-in-out ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Ocean Blog
        </div>
        <div>
          <ul className="flex gap-6 text-2xl font-mono">
            <li className="relative group">
              <Link
                className="py-0 px-0 transition-all duration-1000 ease-in-out"
                to={"/"}
              >
                Home
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 transition-all group-hover:w-full group-hover:left-0 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                className="py-0 px-0 transition-all duration-1000 ease-in-out"
                to={"/about"}
              >
                AboutUs
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 transition-all group-hover:w-full group-hover:left-0 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                className="py-0 px-0 transition-all duration-1000 ease-in-out"
                to={"/travel"}
              >
                TravelGuides
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 transition-all group-hover:w-full group-hover:left-0 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </Link>
            </li>
            <li className="relative group">
              <Link
                className="py-0 px-0 transition-all duration-1000 ease-in-out"
                to={"/contact"}
              >
                Contact
                <span
                  className={`absolute bottom-0 left-0 w-0 h-1 transition-all group-hover:w-full group-hover:left-0 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
