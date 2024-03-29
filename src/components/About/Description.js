import React from "react";

import ProfessionalExperience from "./ProfessionalExperience";

const Description = () => {
  return (
    <div
      className="flex flex-col items-start justify-around p-4 pb-32 md:flex-row-reverse"
      id="about"
    >
      <div className="m-4 md:w-1/3">
        <img
          alt="jagannath bhat"
          className="self-center w-full"
          src="about.jpg"
        />
      </div>
      <div className="max-w-lg mx-auto">
        <span className="flex items-center mb-3 mt-24 text-green-500 welcome w-1/3 md:mt-48">
          welcome
        </span>
        <h2 className="alt-font font-bold text-7xl">i'm jagannath bhat</h2>
        <h3 className="text-2xl tracking-wider mb-12">
          i build web apps. i teach stuff.
        </h3>
        <ProfessionalExperience />
      </div>
    </div>
  );
};

export default Description;
