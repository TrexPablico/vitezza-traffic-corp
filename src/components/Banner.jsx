import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-1/2 bg-red-500 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold mb-4">
          Visit our store to check out more products!
        </h1>
        <a
          href="https://www.google.com/maps/place/Lotus+Queen+Building/@14.847358,120.859523,11z/data=!4m6!3m5!1s0x33965370254dbb89:0xb38ed040d3c183a5!8m2!3d14.847358!4d120.8595227!16s%2Fg%2F11pwt3flss?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <button className="bg-white text-red-400 px-6 py-3 rounded-md cursor-pointer">
            Visit Our Store
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
