import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-2 xs:py-3 sm:py-4 z-10 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white text-black shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="relative flex items-center justify-between px-4 xs:px-6 sm:px-9">
        <div className="flex items-center gap-4">
          <a
            href="https://portfolio-ruby-alpha-66.vercel.app/"
            className={`transition-colors duration-300 ease-in-out ${
              isScrolled ? "text-black" : "text-white"
            } font-mono text-sm xs:text-base`}
          >
            ← Back
          </a>
          <div
            className={`font-bold text-lg xs:text-xl sm:text-2xl transition-colors duration-300 ease-in-out ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Ocean Blog
          </div>
        </div>

        <div className="sm:hidden relative z-20">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              isScrolled ? "text-black" : "text-white"
            }`}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 xs:w-8 xs:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex sm:gap-6">
          <ul className="flex gap-4 xs:gap-5 sm:gap-6 text-lg xs:text-xl sm:text-2xl font-mono">
            <li className="relative group">
              <Link
                className="py-0 px-0 transition-all duration-300 ease-in-out"
                to="/"
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
                className="py-0 px-0 transition-all duration-300 ease-in-out"
                to="/about"
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
                className="py-0 px-0 transition-all duration-300 ease-in-out"
                to="/travel"
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
                className="py-0 px-0 transition-all duration-300 ease-in-out"
                to="/contact"
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

        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute -top-2 xs:-top-3 sm:-top-4 left-0 w-full ${
            isScrolled ? "bg-white text-black" : "bg-gray-900 text-white"
          } shadow-lg transition-all duration-500 ease-in-out transform ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } z-10`}
        >
          <ul className="flex flex-col items-center gap-4 py-12 text-lg xs:text-xl font-mono">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/travel"
                onClick={toggleMenu}
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
              >
                TravelGuides
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="py-2 px-4 hover:bg-white hover:text-black rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
