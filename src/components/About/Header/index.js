import React, { useState } from "react";
import { LINKS } from "../constants";
import MobileNav from "./MobileNav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <h1 className="alt-font font-bold mr-4 text-5xl text-primary">
            jb
          </h1>
          {LINKS.map((link, index) => (
            <a
              key={index}
              className="hidden mx-2 md:inline"
              href={`#${link.key}`}
              title={link.title}
            >
              {link.key}
            </a>
          ))}
        </div>
        <button
          className="block rounded-full px-3 py-2 text-2xl focus:bg-gray-500 focus:bg-opacity-50 md:hidden"
          onClick={() => setShowNav(true)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>
      {showNav && <MobileNav setShowNav={setShowNav} />}
    </>
  );
};

export default Header;
