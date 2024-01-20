import React, { useState } from "react";
import ai from "../assets/ai.png";
import { IoBarChartOutline } from "react-icons/io5";
import { GiRobotGolem } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { GiBleedingEye } from "react-icons/gi";
import "./About.css";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardData = [
    {
      icon: <IoBarChartOutline className="text-white p-2 text-[50px]" />,
      title: "Real Time Analytics",
      description:
        "The times of waiting for your statistics are over. Real Time Analytics converts the results of several important events into coherent information within a second. You will be able to access received data the moment it happen",
    },
    {
      icon: <GiBleedingEye className="text-white p-2 text-[50px]" />,
      title: "Computer Vision",
      description:
        "Let the computer work for you. Every new image is added to the data pool and contributes to the autonomous learning process.",
    },
    {
      icon: (
        <GiRobotGolem className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "More data means better output.",
      description:
        "Artificial Intelligence makes it possible. It can understand natural languages and interact with us by reading, writing, listening and speaking. By progressing the data from these interactions, it continuously learns and improves itself.",
    },
    {
      icon: (
        <AiOutlineSolution className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Solutions",
      description:
        "And the fact that we provide Enterprise-Class as well as personalized solutions.Our solutions have helped a lot of clients and we are sure we can provide value to you as well",
    },
  ];
  return (
    <div id="about" className="container rounded-xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
        <div className=" text-center lg:text-left lg:w-1/2 p-5">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            className="text-primary text-5xl font-semibold font-plus-jakarta-sans mt-5"
          >
            ABOUT <br />
            TORQUEVISION LABS
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-white text-left text-xl mt-5"
          >
            TorqueVision – Providing Innovative, AI Driven Solutions
            <br /> to Companies, Enterprise, and You!
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-white text-left text-xl mt-5"
          >
            We develop personalized AI solutions, Data Analytics Solutions,
            <br /> Business Intelligence, Machine Learning Algorithms, Solutions
            that
            <br /> add value to clients.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-white text-left text-xl mt-5"
          >
            Our Solutions enable you to Search, Observe, Comprehend, and get
            <br /> Insights lying dormant in your Data. The Valuable Insights
            can
            <br /> change the course of your business, achieve higher goals and
            fulfill
            <br /> the purpose for which you hired us.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <img src={ai} className="w-full hidden lg:block lg:w-full h-auto" alt="ai"></img>
        </div>
      </div>
      <div>
        <div>
          <div className="w-11/12 mx-auto py-24">
            <div className="">
              <h1 data-aos="fade-up" data-aos-duration="1000" className="uppercase mb-4 text-center text-4xl font-bold text-primary">
                WHY TORQUEVISION
              </h1>
              <div data-aos="fade-up" data-aos-duration="1500" className="flex justify-center">
                <img
                  className="w-48"
                  src="https://i.ibb.co/Wc6ScBF/devider.png"
                  alt="" 
                />
              </div>
              <p data-aos="fade-up" data-aos-duration="2000" className="text-[16px] text-center mt-4 mb-20 text-white capitalize">
                Little Information About Us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`shadow hover:bg-primary hover:shadow-2xl transition-all border rounded-md pl-2 ${
                    hoveredIndex === index ? "bg-primary" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col justify-center items-center gap-6 px-4 py-10">
                    <div
                      className={`icon-bg ${
                        hoveredIndex === index ? "bg-icon" : "text-white"
                      } transition-all text-center`}
                    >
                      {card.icon}
                    </div>
                    <div
                      className={`${
                        hoveredIndex === index ? "text-white" : "text-white"
                      } transition-all text-center`}
                    >
                      <h1
                        className={`${
                          hoveredIndex === index ? "text-white" : "text-white"
                        } capitalize text-2xl font-bold`}
                      >
                        {card.title}
                      </h1>
                      <p
                        className={`${
                          hoveredIndex === index ? "text-white" : "text-white"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
