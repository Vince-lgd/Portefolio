import React from "react";
import skillsArray from "../data/skillsArray";
import Skill from "./Skill";

const Section3 = () => {
  return (
    <div className="competences">
      <h1>Compétences</h1>
      {skillsArray &&
        skillsArray.map((skill, index) => <Skill key={index} {...skill} />)}
    </div>
  );
};

export default Section3;
