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
          <div className="space-y-2 mt-4">
            {exp.companies.map(company => {
              const duration =
                (company.yearEnd ?? currentYear) - company.yearStart;
              return (
                <div>
                  <p>
                    <span className="text-gray-700">{company.name}</span>
                    <span>
                      {" . "}
                      {duration} year
                      {duration > 1 ? "s" : ""}
                    </span>
                  </p>
                  <p>{company.skills}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
