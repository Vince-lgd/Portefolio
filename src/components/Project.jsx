import React from "react";
import Proptypes from "prop-types";

const Project = ({ name, url, image }) => {
  return (
    <div className="project">
      <title>{name}</title>
      <div className="project__img">
        <img src={image} alt="imgProject" />
      </div>

      <a href={url}>{name}</a>
    </div>
  );
};

Project.propTypes = {
  name: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
};

export default Project;
