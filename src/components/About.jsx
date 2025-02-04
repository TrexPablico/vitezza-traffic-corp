import React from "react";
import about from "../assets/About/about.jpg";

const About = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>{" "}
      {/* White overlay for background shade */}
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">
            A Construction chemical Company
          </h1>
          <p className="text-lg">
            VITEZZA CORPORATION, a 100% Filipino-owned chemical manufacturing
            company, supplies construction materials with a focus on quality and
            reliability. Our young, dynamic team provides the right materials at
            your convenience. We manufacture products like thermoplastic,
            reflectorized traffic paint, skim coat, tile adhesive, and flexible
            cementitious waterproofing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
