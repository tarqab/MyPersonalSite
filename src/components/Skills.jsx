import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="py-32 bg-slate-900 xs:w-[400px] ">
      <div className="container-skills">
        <div>
          <p className="text-5xl font-bold text-white inline border-b-4 border-purple-600 ">
            My Skills
          </p>
          <p className="text-white text-2xl py-4">
            Here is the Experience, which I have, Take you time to take a look !
          </p>
        </div>
        <div className="skills-grid">
          <div className="skills-card">
            <img className="img-card" src={HTML} alt="html"></img>
            <p className="text-white text-2xl">HTML</p>
          </div>
          <div className="skills-card">
            <img className="img-card" src={CSS} alt="CssIcon"></img>
            <p className="text-white text-2xl">CSS</p>
          </div>
          <div className="skills-card">
            <img className="img-card" src={JavaScript} alt="JsIcon"></img>
            <p className="text-white text-2xl">Java Script</p>
          </div>

          <div className="skills-card">
            <img className="img-card" src={ReactImg} alt="RectIcon"></img>
            <p className="text-white text-2xl">React JS</p>
          </div>

          <div className="skills-card">
            <img className="img-card" src={Tailwind} alt="TailwindIcon"></img>
            <p className="text-white text-2xl">Tailwind</p>
          </div>
          <div className="skills-card">
            <img className="img-card" src={GitHub} alt="GitHub"></img>
            <p className="text-white text-2xl">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
