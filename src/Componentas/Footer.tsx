import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-10">
        <div className="text-center">
          <h2 className="font-semibold text-3xl pb-4">Talk With Us</h2>
          <ul className="flex flex-col gap-2 text-lg font-mono">
            <Link className="hover:underline" to={"/"}>
              Home
            </Link>
            <Link className="hover:underline" to={"/about"}>
              About Us
            </Link>
            <Link className="hover:underline" to={"/travel"}>
              Travel Guides
            </Link>
            <Link className="hover:underline" to={"/contact"}>
              Contact
            </Link>
          </ul>
          <p className="pt-10 font-mono text-sm">
            Copyright © Priyarobin 2024. All Rights Reserve.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
