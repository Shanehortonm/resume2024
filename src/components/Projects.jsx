import React from "react";

export const Projects = () => {
  return (
    <div className="p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-down"
        className="text-[3rem] font-semibold mb-20 leading-normal uppercase text-orange-500"
      >
        Projects
      </h1>
      <div className="text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img
          data-aos="fade-right"
          className="flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-orange-500 b_glow"
          src=""
          alt=""
        />
        <img
          data-aos="fade-down"
          className="flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-orange-500 b_glow"
          src=""
          alt=""
        />
        <img
          data-aos="fade-up"
          className="flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-orange-500 b_glow"
          src=""
          alt=""
        />
        <img
          data-aos="fade-left"
          className="flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-orange-500 b_glow"
          src=""
          alt=""
        />
      </div>
    </div>
  );
};
