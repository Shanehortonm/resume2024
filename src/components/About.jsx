import React from "react";
import Banner2 from "../imgs/2.jpg";

export const About = () => {
  return (
    <div
      id="About"
      className="h-full m-auto mt-20 max-w-[1600px] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={Banner2}
        width={300}
        height={300}
        className="border-2 p-1 border-cyan-500  img_glow"
        alt="half closed laptop
        
        "
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white max-w-[950px]">
        <h1
          data-aos="fade-right"
          className="text-[2.8rem] font-semibold mb-8 leading-normal text-cyan-500  uppercase"
        >
          About me
        </h1>
        <p
          data-aos="fade-left"
          className="text-[1.1rem] lg:text-[1.5rem] leading-10"
        >
          Prior to Covid I was a General Manager operating a Phase One Training
          Store! With the safety of my family in mind, I decided to switch
          careers, using my Class A CDL to secure a job in the trucking
          industry, and provide stability as I learn and hone my skills as a
          developer.
          <br />
          <span className="text-cyan-500  uppercase text-[1.5rem]">
            Past
          </span>{" "}
          my work life, I enjoying Coach Youth Football and spending time with
          my two sons.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                data-aos="flip-up"
                className="bg-cyan-800 shadow-lg hover:shadow-cyan-500 /20 text-white border-2 hover:bg-cyan-500 border-cyan-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden font"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
