import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";
const Main = () => {
  return (
    <div name="home" className="main">
      <div className="container">
        <p className="text-3xl sm:text-2xl text-green-50 sm:pt-[30px]"> Hello, I am</p>
        <h1 className="text-8xl sm:text-6xl text-green-400">Tareq Gharibeh</h1>
        <h2 className="text-7xl text-gray-500 sm:text-5xl ">I am Frontend Developer</h2>
        <p className="text-3xl text-white mt-2">
          I am currently working as a web front-end programmer using HTML, CSS,
          Tailwind CSS, and Javascript and on a platform React JS
        </p>
        <div>
          <button
            className="group flex justify-between items-center border-solid border-4
          border-white text-3xl p-4 mt-8 text-green-500 rounded-sm 
          hover:bg-blue-700 "
          >
            <Link to="work" spy={true} smooth={true} duration={500}>
              See my works!
            </Link>
            <span className="group-hover:ml-4 duration-300">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
