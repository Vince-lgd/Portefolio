import React from "react";
import skillsArray from "../data/skillsArray";
import Skill from "./Skill";

const Section3 = () => {
  return (
    <div className="competences">
      <div className="competences__title">
        <h1>Compétences</h1>
      </div>
      <div className="competences__map">
        {skillsArray &&
          skillsArray.map((skill, index) => <Skill key={index} {...skill} />)}
      </div>
    </div>
  );
};

export default Section3;
