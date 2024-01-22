import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { FaBrain } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { SiBereal } from "react-icons/si";
import { MdPermIdentity } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { FaShuffle } from "react-icons/fa6";

const VisualInspection = () => {
 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndex1, setHoveredIndex1] = useState(null);
  const cardData = [
    {
      icon: <FaBrain className="text-white p-2 text-[50px]" />,
      title: "AI Integration",
      description:
        "We harness the power of advanced artificial intelligence algorithms to automate the initial stages of visual inspection, streamlining the process and increasing efficiency",
    },
    {
      icon: <GiHumanPyramid className="text-white p-2 text-[50px]" />,
      title: "Human Expertise",
      description:
        " Our skilled human inspectors complement AI capabilities, adding a layer of contextual understanding and intricate pattern recognition that machines alone cannot achieve.",
    },
    {
      icon: (
        <AiOutlineSolution className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Customizable Solutions",
      description:
        "Tailor our HITL visual inspection services to meet your unique industry and product specifications. From electronics to manufacturing, our services adapt to your specific quality control needs",
    },
    {
      icon: <IoBarChartSharp className="text-white p-2 text-[50px] rounded-full" />,
      title: "Rapid Scalability",
      description:
        " As your inspection requirements fluctuate, our HITL services seamlessly scale to accommodate changes in demand. This ensures a flexible and agile solution that aligns with your production volumes",
    },
    {
        icon: <SiBereal className="text-white p-2 text-[50px] rounded-full" />,
        title: "Real-Time Collaboration",
        description:
          "Facilitate direct communication between AI systems and human inspectors, fostering real-time collaboration. This synergy allows for prompt issue resolution and continuous improvement of inspection accuracy.",
      },
  ];
  const cardData1 = [
    {
      icon: <MdPermIdentity className="text-white p-2 text-[50px]" />,
      title: "Defect Identification:",
      description:
        "Leverage the precision of AI to identify potential defects, with human inspectors providing the expertise to discern complex or subtle issues.",
    },
    {
      icon: <FaCheckCircle className="text-white p-2 text-[50px]" />,
      title: "Quality Assurance",
      description:
     " Combine AI capabilities with human judgment to ensure products meet the highest quality standards, exceeding industry benchmarks. Adaptive Learning: Enable our system to learn and adapt from human insights, continually improving the accuracy of automated processes over time." 
    },
    {
      icon: (
        <BiCustomize className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Custom Training Sets",
      description:
        " Develop specialized training sets for AI models based on your unique product characteristics, enhancing the system's ability to recognize specific features and defects.",
    },
    {
        icon: (
          <FaShuffle className="text-white p-2 text-[50px] rounded-full" />
        ),
        title: "Enhanced Flexibility",
        description:
          "Our HITL services allow for dynamic adjustments based on real-world insights, ensuring that your visual inspection processes remain agile and responsive to changing conditions.",
      },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="container mx-auto my-10 w-full">
        <NavLink
          to={"/"}
          className="p-3 ml-5 md:p-4 mb-10 hover:cursor-pointer bg-primary text-center flex font-plus-jakarta-sans text-white w-20 rounded-full transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          <TiArrowBack className="text-4xl ml-2" />
        </NavLink>
        <div className="container">
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="text-white text-6xl mx-4 mb-3 font-bold w-full text-center font-plus-jakarta-sans"
        >
          Visual Inspection
        </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-lg md:text-2xl mb-3 font-semibold font-plus-jakarta-sans"
        >
          Why WebZoo for HITL Visual Inspection
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 mb-3 font-semibold font-plus-jakarta-sans"
        >
          In the ever-evolving landscape of artificial intelligence, the need for human expertise in visual inspection remains unparalleled. At WebZoo, we offer a cutting-edge Human-in-the-Loop Visual Inspection Service, marrying the precision of AI with the nuanced insights of human intelligence to deliver unmatched quality control solutions.
        </p>
      </div>
        <div>
      <div data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
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
            <div>
            <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-xl my-20 md:text-2xl font-semibold font-plus-jakarta-sans"
        >
          Our HITL Visual Inspection Services Cover
        </p>
            <div data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {cardData1.map((card, index) => (
                <div
                  key={index}
                  className={`shadow hover:bg-primary hover:shadow-2xl transition-all border rounded-md pl-2 ${
                    hoveredIndex1 === index ? "bg-primary" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex1(index)}
                  onMouseLeave={() => setHoveredIndex1(null)}
                >
                  <div className="flex flex-col justify-center items-center gap-6 px-4 py-10">
                    <div
                      className={`icon-bg ${
                        hoveredIndex1 === index ? "bg-icon" : "text-white"
                      } transition-all text-center`}
                    >
                      {card.icon}
                    </div>
                    <div
                      className={`${
                        hoveredIndex1 === index ? "text-white" : "text-white"
                      } transition-all text-center`}
                    >
                      <h1
                        className={`${
                          hoveredIndex1 === index ? "text-white" : "text-white"
                        } capitalize text-2xl font-bold`}
                      >
                        {card.title}
                      </h1>
                      <p
                        className={`${
                          hoveredIndex1 === index ? "text-white" : "text-white"
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
      <div className="container my-20">
        <p
          className="text-white my-20 text-center md:text-lg mx-4 md:mx-8 md:mb-5 font-semibold font-plus-jakarta-sans"
        >
          Partner with WebZoo for unparalleled data collection services. Let us
          be the catalyst for your business success. Contact us today to discuss
          how we can elevate your data strategy to new heights!
        </p>
      </div>
    </div>
  );
};

export default VisualInspection;
