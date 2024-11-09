import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import { skillsData } from "@/app/Data/data";
import SkillsCars from "./SkillsCars";

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Skills</SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skillsData.map((skill) => (
          <div key={skill.id}>
            <SkillsCars skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
