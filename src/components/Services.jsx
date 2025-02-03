import React from "react";
import {
  FaPaintRoller,
  FaTools,
  FaWater,
  FaRulerCombined,
  FaRoad,
  FaSign,
  FaArrowsAltH,
  FaTruckMoving,
} from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";

const Services = () => {
  return (
    <div className="bg-[#636363] p-8">
      <h2 className="text-center text-3xl mb-8 text-white">
        Products & Services
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaPaintRoller className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Reflectorized thermoplastic road marking materials
            </h3>
            <p className="text-white">
              Thermoplastic lane marking materials and their application.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaTools className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sticky John Skim Coat
            </h3>
            <p className="text-white">
              Interior and exterior plastering with high adhesive properties.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaRulerCombined className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sticky John Tile Adhesive
            </h3>
            <p className="text-white">
              Bonding and adhesion for various types of tiles.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <BsCircleHalf className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sticky John Tile Grout
            </h3>
            <p className="text-white">
              Grouting for floor and wall tiles, ensuring stability and
              preventing cracking.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaWater className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Sticky John Flexible Cementitious Waterproofing
            </h3>
            <p className="text-white">
              Waterproof coating with excellent flexibility and durability.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaArrowsAltH className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Guardrails Installation
            </h3>
            <p className="text-white">
              Supply and installation of all types of metal flex beam guardrails
              for highways.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaSign className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Road Signages Installation
            </h3>
            <p className="text-white">
              Installation of road traffic signs and symbols for guidance and
              safety.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaTruckMoving className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Traffic Studs Installation
            </h3>
            <p className="text-white">
              Installation of road traffic studs for improved visibility.
            </p>
          </div>
        </div>
        <div className="w-60 flex flex-col items-center space-y-4 text-center">
          <FaRoad className="text-4xl text-white" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Asphalt Services
            </h3>
            <p className="text-white">
              Road studs Supply and installation of all types of road studs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
