import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-10">
        <div className="text-center">
          <h2 className="font-semibold text-3xl pb-4">Talk With Us</h2>
          <ul className="flex flex-col items-center gap-4 text-lg font-mono">
            <li className="relative group inline-block">
              <Link
                className="py-1 px-6 transition duration-700 ease-in-out"
                to={"/"}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="relative group inline-block">
              <Link
                className="py-1 px-6 transition duration-700 ease-in-out"
                to={"/about"}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="relative group inline-block">
              <Link
                className="py-1 px-6 transition duration-700 ease-in-out"
                to={"/travel"}
              >
                Travel Guides
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
            <li className="relative group inline-block">
              <Link
                className="py-1 px-6 transition duration-700 ease-in-out"
                to={"/contact"}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          </ul>
          <p className="pt-10 font-mono text-sm">
            Copyright © Priyarobin 2024. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
