import React from "react";

const Section5 = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>

      <div className="contact__link">
        <a href="https://www.linkedin.com/in/vincent-lagarde-b61322234/">
          <h2>Linkedin</h2>
        </a>
        <a href="https://github.com/Vince-lgd">
          <h2 c>Github</h2>
        </a>

        <h2>Mail</h2>
        <div className="contact__link__text">
          <p>
            Hesitez pas à me contacter, je suis disponible dès que possible. Si
            vous avez des besoins de plus de renseignements contactez moi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
