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
      className={`fixed top-0 left-0 w-full py-4 z-10 ${
        isScrolled ? "bg-white text-black shadow-lg" : "text-white"
      }`}
    >
      <div className="flex gap-12 justify-start pl-9">
        <div className="font-bold text-2xl">Ocean Blog</div>
        <div>
          <ul className="flex gap-5 text-2xl font-mono ">
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
            <Link className="hover:underline" to={"/about"}>
              AboutUs
            </Link>
            <Link className="hover:underline" to={"/travel"}>
              TravelGuides
            </Link>
            <Link className="hover:underline" to={"/contact"}>
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
