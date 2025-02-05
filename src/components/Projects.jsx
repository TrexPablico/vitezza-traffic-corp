import React from "react";
import sample from "../assets/Projects/sample.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/Projects/p1.jpg";
import img2 from "../assets/Projects/p2.jpg";
import img3 from "../assets/Projects/p3.jpg";
import img4 from "../assets/Projects/p4.jpg";
import img5 from "../assets/Projects/p5.jpg";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projectSamples = [
    {
      id: 1,
      title: "Thermo Plastic Paint",
      description: "",
      img: img1,
    },
    {
      id: 2,
      title: "Road Sign",
      description: "",
      img: img2,
    },
    {
      id: 3,
      title: "Guard Rails",
      description: "",
      img: img3,
    },
    {
      id: 4,
      title: "",
      description: "",
      img: img4,
    },
    {
      id: 5,
      title: "",
      description: "",
      img: img5,
    },
  ];

  return (
    <div className="container mx-auto py-8" id="products">
      <h2 className="text-center text-3xl font-bold mb-8">
        {/*} Our Projects/Products */}
      </h2>
      <Slider {...settings}>
        {projectSamples.map((project) => (
          <div
            key={project.id}
            className="text-center p-4 flex flex-col items-center justify-center"
          >
            <img
              src={project.img}
              alt={project.title}
              className="  object-cover mb-4 justify-center items-center"
            />
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
