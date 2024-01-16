import React, { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import Sports from "../assets/sports.png";
import chatbot from "../assets/chatbot.png"
import cell from "../assets/cell.png"
import tool from "../assets/tool.png"
import covid from "../assets/covid.png"

const Work = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <div id="work" className="container border rounded-xl  mx-auto">
      <h1 className="text-primary text-5xl text-center font-semibold font-plus-jakarta-sans mt-10">
        Our Work
      </h1>
      <p className="text-[16px] text-center my-10 text-white capitalize">
        Some of the many solutions our clients are happy with.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
  <Link
    to="slide1"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    onSetActive={handleSetActive}
    className="p-3 hover:cursor-pointer text-white bg-primary w-full md:w-auto rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
  >
    Sports
  </Link>
  <Link
    to="slide2"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    onSetActive={handleSetActive}
    className="p-3 hover:cursor-pointer text-white w-full md:w-auto bg-primary rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
  >
    CHATBOT
  </Link>
  <Link
    to="slide3"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    onSetActive={handleSetActive}
    className="p-3 hover:cursor-pointer text-white w-full md:w-auto bg-primary rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
  >
    CELL-SEGMENTATION
  </Link>
  <Link
    to="slide4"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    onSetActive={handleSetActive}
    className="p-3 hover:cursor-pointer text-white w-full md:w-auto bg-primary rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
  >
    ANALYTICS TOOL
  </Link>
  <Link
    to="slide5"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    onSetActive={handleSetActive}
    className="p-3 hover:cursor-pointer text-white w-full md:w-auto bg-primary rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
  >
    COVID 19 STATUS DASHBOARD
  </Link>
</div>

      <div id="slide1" className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-semibold my-10 text-white text-center md:text-left">
            SPORTS ANALYSIS
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl font-semibold my-10 text-primary text-center md:text-left">
            Computer vision-based sports analysis.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-md font-semibold text-white text-center md:text-left">
            We design, build, and implement top-notch solutions with agile
            advisory services, supreme advanced analytics, and a robust
            technology platform that helps sports bodies, athletes, teams,
            brands, broadcasters, and media achieve better outcomes, and we
            create epic results for our clients around the globe.
          </p>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img src={Sports} alt="sports" className="max-w-full rounded-3xl h-auto" />
        </div>
      </div>
      <div id="slide2" className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-semibold my-10 text-white text-center md:text-left">
          CHATBOT
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl font-semibold my-10 text-primary text-center md:text-left">
          Chatbot development for a smarter and efficient workflow.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-md font-semibold text-white text-center md:text-left">
          BotsCrew displayed the utmost professionalism, providing updates whenever required and mitigating time-zone dependent scheduling issues. Customers can expect comprehensive support, even post-delivery.
          </p>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img src={chatbot} alt="chatbot" className="max-w-full rounded-3xl h-auto" />
        </div>
      </div>
      <div id="slide3" className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-semibold my-10 text-white text-center md:text-left">
          CELL-SEGMENTATION
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl font-semibold my-10 text-primary text-center md:text-left">
          Computer vision in health care.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-md font-semibold text-white text-center md:text-left">
          Our unique composite measure of engagement assesses individual risk and predicts patient outcome. we do research on Biotechnology, Diagnostics etc.
          </p>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img src={cell} alt="cell" className="max-w-full rounded-3xl h-auto" />
        </div>
      </div>
      <div id="slide4" className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-semibold my-10 text-white text-center md:text-left">
          ANALYTICS TOOL
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl font-semibold my-10 text-primary text-center md:text-left">
          Get valuable insights from user interactions and data around the globe.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-md font-semibold text-white text-center md:text-left">
          Millions of items/products are uploaded over thousands of e-commerce sites, Torque vision provides the key data, trends and insights you need to drive your business strategy and growth. We have pioneered cutting edge data analytics to augment business trades and sell experience.
          </p>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img src={tool} alt="tool" className="max-w-full rounded-3xl h-auto" />
        </div>
      </div>
      <div id="slide5" className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-4xl font-semibold my-10 text-white text-center md:text-left">
          REAL TIME COVID 19 STATUS DASHBOARD
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="text-xl font-semibold my-10 text-primary text-center md:text-left">
          GKeeping up-to-date with Covid-19 can be difficult.
          </p>
          <p data-aos="fade-up" data-aos-duration="1500" className="text-md font-semibold text-white text-center md:text-left">
          In the midst of crisis its not only the numbers you can rely on. TorqueVision has developed a solution. Our Dashboard Application contains information of hospitals near you, urgent-care facilities.We are constantly adding features to you stay ahead and stay safe in this Global Pandemic.
          </p>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img src={covid} alt="tool" className="max-w-full rounded-3xl h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Work;
