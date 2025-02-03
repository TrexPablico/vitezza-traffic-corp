import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-1/2 bg-red-500 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4">
          Visit our store to check out more products!
        </h1>
        <button className="bg-white text-red-400 px-6 py-3 rounded-md">
          Visit Our Store
        </button>
      </div>
    </div>
  );
};

export default Banner;
