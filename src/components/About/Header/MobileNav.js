import React from "react";
import { LINKS } from "../constants";
import { SOCIALS } from "../../constants";

const MobileNav = ({ setShowNav }) => {
  return (
    <div className="bg-white fixed flex flex-col h-full items-center justify-center left-0 top-0 w-full">
      <button
        className="block fixed m-4 right-0 rounded-full px-3 py-2 text-2xl top-0
          focus:bg-gray-500 focus:bg-opacity-50 md:hidden"
        onClick={() => setShowNav(false)}
      >
        <i className="ri-close-line"></i>
      </button>
      {LINKS.map((link, index) => (
        <a
          key={index}
          className="m-3 text-xl"
          href={`#${link}`}
          onClick={() => setShowNav(false)}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default MobileNav;
