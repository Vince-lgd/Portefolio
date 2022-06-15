import Slider from "react-slick";
import descProjects from "../data/descProjects.Js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./Project";

const Section4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    ToScroll: 1,
  };
  return (
    <div className="projects">
      <div className="projects__title">
        <h1>Projets</h1>
      </div>

      <Slider {...settings}>
        {descProjects &&
          descProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
      </Slider>
    </div>
  );
};

export default Section4;
