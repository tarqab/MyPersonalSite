import React from "react";

const About = () => {
  return (
    <div name="about" className="about">
      <div className="container-about">
        <div className="col-about-first">
          <div className=" pb-8 pr-4 sm:w-60">
            <p className="about-word">About me</p>
          </div>
          <div></div>
        </div>
       
        <div className="col-about"> {/*second column */}
          <div>
            {" "}
            <p className="text-4xl font-bold text-white">Hi, I am Tareq please take a look to see my work</p>
          </div>
          <div>
            <p className="text-2xl text-white">I am Studing right now in University as IT Engineer and work as
                web developer. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
