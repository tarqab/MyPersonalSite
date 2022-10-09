import React from "react";
import backgr from "../assets/realestate.jpg";
import backgrTodo from "../assets/todo.png";
import backgrBmi from "../assets/BmICalculator.png";
import backgrChatApp from "../assets/backgrChatApp.jpg";

const Work = () => {
  return (
    <div name="work" className="work">
      <div className="container-work">
        <div className="py-8 ">
          <p className="text-5xl font-bold mx-12 border-b-4 border-purple-600 inline">
            My Works
          </p>
        </div>
        <div className="grid-work">
          {/* card 1 */}
          <div
            style={{ backgroundImage: `url(${backgr})` }}
            className="shadow-lg shadow-slate-800 group  
            rounded-lg flex flex-col justify-center items-center mx-auto
            bg-no-repeat bg-contain bg-center
            w-[400px] h-96 relative content-div sm:scale-90"
          >
            <div className="absolute inset-0 group-hover:bg-gray-700 group-hover:scale-100 group-hover:duration-500">
              <span className="hidden group-hover:flex justify-center items-center text-4xl text-white mt-[100px] ">
                RealEstate
              </span>

              <div className="hidden group-hover:flex justify-center space-x-12 pt-4 ">
                <a href="https://realestatetarqab.netlify.app/">
                  <button className="text-demo-code">Demo</button>
                </a>
                <a href="https://github.com/tarqab/realEstate">
                  <button className="text-demo-code">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div
            style={{ backgroundImage: `url(${backgrTodo})` }}
            className="shadow-lg shadow-slate-800 group  
            rounded-lg flex flex-col justify-center items-center mx-auto
            bg-no-repeat bg-cover bg-center
            w-[400px] h-96 relative content-div sm:scale-90"
          >
            <div className="absolute inset-0 group-hover:bg-gray-700 group-hover:scale-100 group-hover:duration-500">
              <span className="hidden group-hover:flex justify-center items-center text-4xl text-white mt-[100px] ">
                RealEstate
              </span>

              <div className="hidden group-hover:flex justify-center space-x-12 pt-4 ">
                <a href="https://mustwork.netlify.app/">
                  <button className="text-demo-code">Demo</button>
                </a>
                <a href="https://github.com/tarqab/todolist">
                  <button className="text-demo-code">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div
            style={{ backgroundImage: `url(${backgrBmi})` }}
            className="shadow-lg shadow-slate-800 group         
             rounded-lg flex flex-col justify-center items-center mx-auto
            bg-no-repeat bg-cover bg-center
            w-[400px] h-96 relative content-div sm:scale-90"
          >
            <div className="absolute inset-0 group-hover:bg-gray-700 group-hover:scale-100 group-hover:duration-500">
              <span className="hidden group-hover:flex justify-center items-center text-4xl text-white mt-[100px] ">
                RealEstate
              </span>

              <div className="hidden group-hover:flex justify-center space-x-12 pt-4 ">
                <a href="https://myprojectbmicalculator.netlify.app/">
                  <button className="text-demo-code">Demo</button>
                </a>
                <a href="https://github.com/tarqab/BMI-Calc">
                  <button className="text-demo-code">Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* card 4  */}
          <div
            style={{ backgroundImage: `url(${backgrChatApp})` }}
            className="shadow-lg shadow-slate-800 group         
             rounded-lg flex flex-col justify-center items-center mx-auto
             w-[400px] h-96 relative content-div sm:scale-90"
          >
            <div className="absolute inset-0 group-hover:bg-gray-700 group-hover:scale-100 group-hover:duration-500">
              <span className="hidden group-hover:flex justify-center items-center text-4xl text-white mt-[100px] ">
                Chat Application
              </span>

              <div className="hidden group-hover:flex justify-center space-x-12 pt-4 ">
                <a href="https://chat-me-per.web.app/">
                  <button className="text-demo-code">Demo</button>
                </a>
                <a href="https://github.com/tarqab/Chat-App">
                  <button className="text-demo-code">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
