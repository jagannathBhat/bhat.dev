import React from "react";
import Socials from "../Common/Socials";

const Footer = () => (
  <div className="flex items-center justify-between max-w-7xl mx-auto p-8">
    <h1 className="alt-font font-bold mr-4 text-5xl text-primary">jb</h1>
    <div className="text-3xl space-x-5">
      <Socials />
    </div>
  </div>
);

export default Footer;
