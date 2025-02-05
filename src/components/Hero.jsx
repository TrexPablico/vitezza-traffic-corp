import React from "react";
import hero from "../assets/Hero/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
      {/* Overlay for opacity */}
      <div className="relative container mx-auto flex items-center h-full">
        <div className="text-white p-8 mb-40">
          <h1 className="text-5xl font-bold mb-4">Vitezza Corporation.</h1>
          <p className="text-3xl mb-8">A Construction chemical Company</p>
          <a href="#services">
            <button className="bg-red-500 text-white px-6 py-3 rounded-md">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
