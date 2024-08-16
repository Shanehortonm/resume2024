import React from "react";

// IMPORT ICONS

export const Skills = () => {
  return (
    <div id="Skills" className="skills h-full p-20 ">
      <h1
        data-aos="fade-in"
        className="text-[3rem] font-semibold mb-20 leading-normal uppercase text-white"
      >
        Skills
      </h1>
      <div class="gradient-cards">
        <div data-aos="fade-zoom-in" data-aos-delay="150" class="card">
          <div class="container-card bg-green-box">
            <p class="card-title">Front-End</p>
            <ul class="card-description">
              <li>Proficient in HTML, CSS, and JavaScript</li>
              <li>Experience with React.js framework</li>
              <li>Knowledge of responsive design principles</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-zoom-in" data-aos-delay="200" class="card">
          <div class="container-card bg-white-box">
            <p class="card-title">Back-End</p>
            <ul class="card-description">
              <li>Proficient working with Node.js</li>
              <li>Experience with Express.js</li>
              <li>Experience using Python</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-zoom-in" data-aos-delay="250" class="card">
          <div class="container-card bg-yellow-box">
            <p class="card-title">UI/UX Design</p>
            <ul class="card-description">
              <li>Skilled in using wireframing tools (Figma) </li>
              <li>
                Ability to create visually appealing and functional interfaces
              </li>
              <li>Strong grasp of accessibility standards and practices</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-zoom-in" data-aos-delay="300" class="card">
          <div class="container-card bg-blue-box">
            <p class="card-title">Soft Skills</p>
            <ul class="card-description">
              <li>Effective verbal and written communication</li>
              <li>Strong problem-solving abilities</li>
              <li>Team collaboration and interpersonal skills</li>
              <li>Time management and organizational skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
