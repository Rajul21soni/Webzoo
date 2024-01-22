import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";

const DataScraping  = () => {
 useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardData = [
    {
      icon: <GiSpiderWeb className="text-white p-2 text-[50px]" />,
      title: "Web Scraping",
      description:
        "Extract relevant information from websites, online databases, and other digital sources, ensuring that your data is up-to-date and comprehensive. Competitor Analysis: Stay ahead in your industry by scraping and analyzing data related to competitors, market trends, and consumer preferences.",
    },
    {
      icon: <MdLocalGroceryStore className="text-white p-2 text-[50px]" />,
      title: "E-commerce Product Data",
      description:
        "Keep your product catalog up-to-date with automated scraping of e-commerce websites, including product details, pricing, and customer reviews.",
    },
    {
      icon: (
        <IoShareSocial className="text-white p-2 text-[50px] rounded-full" />
      ),
      title: "Social Media Data",
      description:
        "Extract valuable insights from social media platforms, monitoring trends, sentiments, and customer interactions.",
    },
    {
        icon: <FaDatabase className="text-white p-2 text-[50px] rounded-full" />,
        title: "Custom Data Sets",
        description:
          " Work with our team to create custom data sets tailored to your specific needs, providing you with the information necessary for strategic decision-making.",
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
          Data Scraping 
        </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 mb-3 font-semibold font-plus-jakarta-sans"
        >
          Unlock the full potential of your data-driven initiatives with [Your Company Name], where cutting-edge technology meets human intelligence in our Human-in-the-Loop (HITL) Data Scraping Services. We specialize in delivering accurate, high-quality data by seamlessly combining the efficiency of automated data scraping with the precision and contextual understanding provided by human experts.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-lg md:text-2xl mb-3 font-semibold font-plus-jakarta-sans"
        >
          Why WebZoo for HITL Visual Inspection
        </p>
      </div>
        <div>
      <div data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

export default DataScraping ;
