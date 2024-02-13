import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

//Imgs
import BannerImg from "../imgs/banner.jpg";

export const Banner = () => {
  return (
    <div className="m-auto max-w-[1800px] lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white max-w-[950px]">
        <h1
          data-aos="fade-down"
          className="text-[4rem] font-semibold mb-8 leading-normal uppercase"
        >
          Welcome To{" "}
          <span className="text-orange-500 uppercase">My Resume</span>
        </h1>
        <p
          data-aos="fade-left"
          className="text-[1.1rem] leading-10 lg:text-[1.5rem]"
        >
          Hey there! I'm Shane, and I'm all about crafting cool stuff with
          React. I recent obtained Front-End Certifications from Code:Louisville
          and I'm diving headfirst into the world of Front-End development. I
          love learning new techniques and working together to make awesome web
          experiences. Let's build something fun!
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                data-aos="fade-up"
                href="https://github.com/Shanehortonm"
                className="text-orange-500 hover:text-orange-600 rounded-full glow p-2"
                target="_blank"
              >
                <FaGithub className="text-[28px]" />
              </a>
              <a
                data-aos="fade-up"
                href="https://www.linkedin.com/in/shanemhorton/"
                className="text-orange-500 hover:text-orange-600 rounded-full glow p-2"
                target="_blank"
              >
                <FaLinkedin className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={BannerImg}
        width={300}
        height={300}
        alt="half closed laptop
        "
      />
    </div>
  );
};
