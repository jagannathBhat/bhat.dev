import React from "react";

import { PROFESSIONAL_EXPERIENCE } from "./constants";

const ProfessionalExperience = () => {
  return (
    <div className="flex flex-col space-x-0 space-y-12 md:flex-row md:space-x-7 md:space-y-0">
      {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
        <div
          key={index}
          className="font-semibold text-gray-500 px-4 md:w-1/2 md:px-0"
        >
          <img alt={exp.title} className="h-16 mb-2" src={exp.logo} />
          <p className="text-2xl text-black">{exp.title}</p>
          <p>{exp.subtitle}</p>
          <p>{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
