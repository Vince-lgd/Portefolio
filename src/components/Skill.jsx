import React from "react";
import Proptypes from "prop-types";
const Skill = ({ name, image }) => {
  return (
    <div className="competence">
      <h2>{name}</h2>
      <div className="competence__logo">
        <img src={image} alt="image_logo" />
      </div>
    </div>
  );
};
Skill.propTypes = {
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};

export default Skill;
