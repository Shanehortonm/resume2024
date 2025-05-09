import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/index.css";

import { Autoplay, EffectCube, Pagination } from "swiper/modules";

//imgs
import Ale from "../imgs/projectimgs/ale.png";
import Encurage from "../imgs/projectimgs/encurage.png";
import LS from "../imgs/projectimgs/legendarysports.png";
import ES from "../imgs/projectimgs/esthersoap.png";

export const Projects = () => {
  return (
    <div
      id="Projects"
      className="projects h-[100svh] p-20 flex flex-col items-center justify-center lg:h-[120svh]"
    >
      <h1
        data-aos="zoom-in"
        className="text-[3rem] font-semibold mb-10 leading-normal uppercase text-white"
      >
        Projects
      </h1>
      <div data-aos="zoom-in" className="project-slide">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 0,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="project-slide-container">
              <img src={Encurage} />
              <div className="project-slide-info">
                <h3>Encurage</h3>
                <div>
                  <p>Marketing website for Children's Health App</p>
                  <p>Built using React.js, Google Docs, Node.js</p>
                </div>
                <a
                  href="https://www.encurage.app/"
                  className="text-cyan-500 hover:text-orange-400 transition-all"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-slide-container">
              <img src={Ale} />
              <div className="project-slide-info">
                <h3>ALE Cleaning Services</h3>
                <div>
                  <p>Business Website for local cleaning company</p>
                  <p>Built with JavaScript and Email.js</p>
                </div>
                <a
                  href="https://alecleaningservices.netlify.app/"
                  className="text-cyan-500 hover:text-orange-400 transition-all"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="project-slide-container">
              <img src={LS} />
              <div className="project-slide-info">
                <h3>Legendary Sports</h3>
                <div>
                  <p>Final Project for Code:Louisville</p>
                  <p>Built using Javascript, Third Party API's </p>
                </div>
                <a
                  href="https://legendary-sports.netlify.app/"
                  className="text-cyan-500 hover:text-orange-400 transition-all"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-slide-container">
              <img src={ES} />
              <div className="project-slide-info">
                <h3>Esther Soap Company</h3>
                <div>
                  <p>Business Website for Local Soap Company</p>
                  <p>Built with Vite and Tailwind</p>
                </div>
                <a
                  href="/"
                  className="text-cyan-500 hover:text-orange-400 transition-all"
                  target="_blank"
                >
                  Under Construction
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
