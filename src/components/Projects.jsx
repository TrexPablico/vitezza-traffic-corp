import React from "react";
import sample from "../assets/Projects/sample.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      title: "Project 1",
      description: "Description for Project 1",
      img: sample,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      img: sample,
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      img: sample,
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      img: sample,
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      img: sample,
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      img: sample,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">
        Our Projects/Gallery/Products
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
