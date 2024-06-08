import React from "react";
import { DiHtml5, DiCss3, DiJavascript, DiReact } from "react-icons/di";

export const Skills = () => {
  return (
    <div
      id="Skills"
      className="h-full p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-down"
        className="text-[3rem] font-semibold mb-20 leading-normal uppercase text-cyan-500 "
      >
        Skills
      </h1>
      <div className="text-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <div
          data-aos="fade-up"
          className="text-[1.5rem] flex flex-col items-center justify-center font-semibold text-cyan-500  rounded-2xl h-36 w-44 border-2 border-cyan-500  b_glow"
        >
          <h2 className="text-[1.5rem] font-semibold text-cyan-500 ">HTML5</h2>
          <DiHtml5 size={100} />
        </div>
        <h2
          data-aos="fade-down"
          className="text-[1.5rem] flex flex-col items-center justify-center font-semibold text-cyan-500  rounded-2xl h-36 w-44 border-2 border-cyan-500  b_glow"
        >
          <h2 className="text-[1.5rem] font-semibold text-cyan-500 ">CSS3</h2>
          <DiCss3 size={100} />
        </h2>
        <div
          data-aos="fade-up"
          className="text-[1.5rem] flex flex-col items-center justify-center font-semibold text-cyan-500  rounded-2xl h-36 w-44 border-2 border-cyan-500  b_glow"
        >
          <h2 className="text-[1.5rem] font-semibold text-cyan-500 ">
            Javascript
          </h2>
          <DiJavascript size={100} />
        </div>
        <h2
          data-aos="fade-down"
          className="text-[1.5rem] flex flex-col items-center justify-center font-semibold text-cyan-500  rounded-2xl h-36 w-44 border-2 border-cyan-500  b_glow"
        >
          <h2 className="text-[1.5rem] font-semibold text-cyan-500 ">React</h2>
          <DiReact size={100} />
        </h2>
      </div>
    </div>
  );
};
