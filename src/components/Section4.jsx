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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <h1>Projets</h1>

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
