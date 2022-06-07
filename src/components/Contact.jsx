import React from "react";
const Section5 = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <div className="contact__container__link">
          <a href="https://www.linkedin.com/in/vincent-lagarde-b61322234/">
            <h2>Linkedin</h2>
          </a>
          <a href="https://github.com/Vince-lgd">
            <h2>Github</h2>
          </a>
          <a href="mailto:lagardevincent64@gmail.com">
            <h2>Mail</h2>
          </a>
        </div>
        <div className="contact__container__link__text">
          <p>
            Je suis actuellement à la recherche d'une entreprise pour une
            alternance débutant le 12 Septembre 2022, je suis disponible dès que
            possible. Hesitez pas à me contacter, Si vous avez besoins de plus
            de renseignements envoyez moi un petit message.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
