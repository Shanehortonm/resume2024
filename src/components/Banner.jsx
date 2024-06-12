import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Imgs
import BannerImg from "../imgs/banner.jpg";

export const Banner = () => {
  return (
    <div
      id="Home"
      className="h-full m-auto max-w-[1800px] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center"
    >
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white max-w-[950px]">
        <h1
          data-aos="fade-down"
          className="text-[4rem] font-semibold mb-8 leading-normal uppercase"
        >
          Shane <span className="text-cyan-500 uppercase">Horton</span>
        </h1>
        <h3
          data-aos="fade-down"
          className="text-[2.5rem] font-semibold mb-8 leading-normal uppercase"
        >
          <span className="text-orange-500 uppercase">React </span>
          Developer
        </h3>
        <p
          data-aos="fade-left"
          className="text-[1.1rem] leading-10 lg:text-[1.5rem]"
        >
          Front End Developer who focuses on writing clean, elegant and
          efficient code
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                data-aos="fade-up"
                href="https://github.com/Shanehortonm"
                className="text-cyan-500 hover:text-cyan-600 rounded-full glow p-2"
                target="_blank"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                data-aos="fade-up"
                href="https://www.linkedin.com/in/shanemhorton/"
                className="text-cyan-500 hover:text-cyan-600 rounded-full glow p-2"
                target="_blank"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="banner-img"
        data-aos="fade-up"
        src={BannerImg}
        width={280}
        height={280}
        alt="half closed laptop
        "
      />
    </div>
  );
};
