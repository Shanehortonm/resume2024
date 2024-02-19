import React from "react";

//imgs
import Ale from "../imgs/projectimgs/ale.png";
import Encurage from "../imgs/projectimgs/encurage.png";
import LS from "../imgs/projectimgs/legendarysports.png";
import ES from "../imgs/projectimgs/esthersoap.png";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-down"
        className="text-[3rem] font-semibold mb-20 leading-normal uppercase text-cyan-500"
      >
        Projects
      </h1>
      <div className="text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <img
          width={300}
          data-aos="fade-down"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-500 b_glow"
          src={Encurage}
          alt=""
        />
        <img
          width={300}
          data-aos="fade-right"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-500 b_glow"
          src={Ale}
          alt=""
        />
        <img
          width={300}
          data-aos="fade-up"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-500 b_glow"
          src={LS}
          alt=""
        />
        <img
          width={300}
          data-aos="fade-left"
          className="flex items-center justify-center rounded-3xl p-1 border-2 border-cyan-500 b_glow"
          src={ES}
          alt=""
        />
      </div>
    </div>
  );
};
