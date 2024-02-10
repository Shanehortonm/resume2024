import React from "react";
import { FaGithub } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          Welcome To <span className="text-fuchsia-500">My Resume</span>
        </h1>
        <p>
          My name is Shane, and I'm passionate about building interactive and
          user-friendly web applications. I recently completed my Front-End
          Certifications with Code:Louisville and have been honing my skills in
          React. I enjoy tackling new challenges and collaborating with others
          to create innovative solutions.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Shanehortonm"
                className="text-fuchsia-500 hover:text-fuchsia-500 rounded-full glow p-2"
              >
                <FaGithub className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
