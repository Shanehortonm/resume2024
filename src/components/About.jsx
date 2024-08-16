import React from "react";

export const About = () => {
  return (
    <div
      id="About"
      className="about h-full m-auto mt-20  lg:px-56 px-10 lg:py-0 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center "
    >
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="h-[100svh]  lg:py-40  flex flex-col justify-center lg:items-start items-center text-white max-w-[950px]">
        <h1
          data-aos="fade-in"
          className="text-[2.8rem] font-semibold mb-8 leading-normal text-white  uppercase"
        >
          About <span className="text-cyan-500 uppercase">Me</span>
        </h1>
        <p
          data-aos="fade-in"
          className="text-[1.1rem] lg:text-[1.5rem] leading-10"
        >
          Prior to Covid I was a General Manager operating a Phase One Training
          Store! With the safety of my family in mind, I decided to switch
          careers, using my Class A CDL to secure a job in the trucking
          industry, and provide stability as I learn and hone my skills as a
          developer.
          <br />
          <br />
          <span className="text-orange-500  uppercase text-[1.5rem]">
            Past
          </span>{" "}
          my work life, I enjoy Coaching Youth Football and spending time with
          my two sons.
        </p>
        <div data-aos="fade-in" className="flex mt-8 gap-2">
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
