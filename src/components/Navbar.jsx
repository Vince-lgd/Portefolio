import React from "react";

const Navbar = ({ setScrollValue }) => {
  return (
    <div className="navbar">
      <div className="navbar__text">
        <button onClick={() => setScrollValue(0)}>Accueil</button>
        <button onClick={() => setScrollValue(1)}>Présentation</button>
        <button onClick={() => setScrollValue(2)}>Compétences</button>
        <button onClick={() => setScrollValue(3)}>Projets</button>
        <button onClick={() => setScrollValue(4)}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
