import React, { useState } from "react";
import ai from "../assets/ai.png";
import { MdHealthAndSafety } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";
import { GiRobotGolem } from "react-icons/gi";
import { FaCarRear } from "react-icons/fa6";
import "./About.css";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardData = [
    {
      icon: <MdHealthAndSafety className="text-white p-2 text-[50px]" />,
      title: "Healthcare",
      description:
        "The times of waiting for your statistics are over. Real Time Analytics converts the results of several important events into coherent information within a second. You will be able to access received data the moment it happen",
    },
    {
      icon: <MdAgriculture className="text-white p-2 text-[50px]" />,
      title: "Agriculture",
      description:
        "Let the computer work for you. Every new image is added to the data pool and contributes to the autonomous learning process.",
    },
    {
      icon: (
        <GiRobotGolem className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Robotics",
      description:
        "Artificial Intelligence makes it possible. It can understand natural languages and interact with us by reading, writing, listening and speaking. By progressing the data from these interactions, it continuously learns and improves itself.",
    },
    {
      icon: <FaCarRear className="text-white p-2 text-[50px] rounded-full" />,
      title: "Autonomous Vehicles",
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
            data-aos-easing="ease-in-sine"
            className="text-primary text-5xl font-semibold font-plus-jakarta-sans mt-5"
          >
            Why Choose
            <br />
            <strong className="text-6xl">WebZoo</strong>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="500" data-aos-easing="ease-in-sine"
            className=" text-primary font-semibold text-left text-2xl mt-5"
          >
            Accuracy and Precision-
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-white text-left text-xl mt-5"
          >
            Our expert annotators ensure every label is precise,
            <br />
            contributing to the reliability of your AI models.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className=" text-primary font-semibold text-left text-2xl mt-5"
          >
            Scalability-
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-white text-left text-xl mt-5"
          >
            From small datasets to large-scale projects, we adapt to your needs,
            <br /> ensuring timely delivery without compromising quality.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className=" text-primary font-semibold text-left text-2xl mt-5"
          >
            Custom Solutions-
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-white text-left text-xl mt-5"
          >
            Tailor-made annotation services to meet your unique project
            requirements,
            <br /> ensuring maximum relevance and efficiency.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className=" text-primary font-semibold text-left text-2xl mt-5"
          >
            Security and Confidentiality-
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-white text-left text-xl mt-5"
          >
            Your data security is our priority. We follow stringent protocols
            <br /> to safeguard your sensitive information.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className=" text-primary font-semibold text-left text-2xl mt-5"
          >
            State-of-the-Art Technology-
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-white text-left text-xl mt-5"
          >
            Leveraging the latest tools and techniques, we stay at the forefront
            of data annotation,
            <br /> providing you with the best-in-class services.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <img
            src={ai}
            className="w-full hidden lg:block lg:w-full h-auto"
            alt="ai"
          ></img>
        </div>
      </div>
      <div>
        <div>
          <div className="w-11/12 mx-auto py-24">
            <div className="">
              <h1
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="uppercase mb-4 text-center text-4xl font-bold text-primary"
              >
                Industries We Serve
              </h1>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="flex justify-center"
              >
                <img
                  className="w-48"
                  src="https://i.ibb.co/Wc6ScBF/devider.png"
                  alt=""
                />
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="text-[16px] text-center mt-4 mb-20 text-white capitalize"
              >
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
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
            
"
              >
                And Many More..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
