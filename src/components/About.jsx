import React from "react";
import Banner2 from "../imgs/2.jpg";

export const About = () => {
  return (
    <div
      id="About"
      className=" m-auto max-w-[1600px] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={Banner2}
        width={300}
        height={300}
        className="border-2 p-1 border-orange-500 img_glow"
        alt="half closed laptop
        
        "
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white max-w-[950px]">
        <h1
          data-aos="fade-right"
          className="text-[2.8rem] font-semibold mb-8 leading-normal text-orange-500 uppercase"
        >
          About me
        </h1>
        <p
          data-aos="fade-left"
          className="text-[1.1rem] lg:text-[1.5rem] leading-10"
        ></p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                data-aos="flip-up"
                className="bg-orange-800 shadow-xl hover:shadow-orange-500/50 text-white border-2 hover:bg-orange-500 border-orange-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden font"
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
