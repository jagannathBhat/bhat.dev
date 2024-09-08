import React from "react";
import { SOCIALS } from "../constants";

const Socials = () => {
  return (
    <>
      {SOCIALS.map((social, index) => (
        <a
          key={index}
          href={social.link}
          title={social.title}
          rel="noreferrer"
          target="_blank"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </>
  );
};

export default Socials;
