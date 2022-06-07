import React from "react";
import Proptypes from "prop-types";
const Skill = ({ name, image }) => {
  return (
    <div className="competence">
      <h2>{name}</h2>
      <img src={image} alt="image_logo" />
    </div>
  );
};
Skill.propTypes = {
  name: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};

export default Skill;
