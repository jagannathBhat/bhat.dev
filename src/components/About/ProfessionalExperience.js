import React from "react";

import { PROFESSIONAL_EXPERIENCE } from "./constants";

const ProfessionalExperience = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col space-x-0 space-y-12 md:flex-row md:space-x-7 md:space-y-0">
      {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
        <div
          key={index}
          className="font-semibold text-gray-400 px-4 md:w-1/2 md:px-0"
        >
          <p className="text-2xl text-black">{exp.title}</p>
          <p>
            <span className="text-gray-700">{exp.company}</span>
            <span>{" . "}
              {(exp.yearEnd ?? currentYear) - exp.yearStart} year
              {(exp.yearEnd ?? currentYear) - exp.yearStart > 1 ? "s" : ""}
            </span>
          </p>
          <p>{exp.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
