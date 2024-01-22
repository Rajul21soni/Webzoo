import React from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import web from "../assets/web.gif";
import Marquee from "react-fast-marquee";
import Marquee1 from "../assets/Marquee1.jpg";
import Marquee2 from "../assets/Marquee2.jpg";
import Marquee3 from "../assets/Marquee3.png";
import Marquee4 from "../assets/Marquee4.png";
import Marquee5 from "../assets/Marquee5.jpg";
import Marquee6 from "../assets/Marquee6.jpg";
import Marquee7 from "../assets/Marquee7.png";
import Marquee8 from "../assets/Marquee8.jpg";

const DataCollection = () => {
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
          Data Collection
        </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-lg md:text-2xl mb-3 font-semibold font-plus-jakarta-sans"
        >
          Your Trusted Data Collection Partner
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 mb-3 font-semibold font-plus-jakarta-sans"
        >
          In today's fast-paced digital world, data is the heartbeat of every
          successful business. At WebZoo, we understand the critical role that
          accurate and relevant data plays in driving informed decision-making.
          Our data collection service is designed to empower your organization
          with the most up-to-date and comprehensive information, giving you a
          competitive edge in the market.
        </p>
      </div>

      <div className="container mx-auto">
        <p className="text-lg  text-white font-semibold mb-4 text-center">
          Our Data Collection Services
        </p>
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">
          #Include
        </h2>
        <Marquee className="cursor-pointer flex gap-4">
          {[
            Marquee1,
            Marquee2,
            Marquee3,
            Marquee4,
            Marquee5,
            Marquee6,
            Marquee7,
            Marquee8,
          ].map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image}
                alt={`image-${index}`}
                className="w-80 h-80 p-4 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="container my-20 mx-auto mt-20">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 mt-20  rounded-lg mb-6 md:mb-0">
            <div className="bg-primary overflow-hidden rounded-xl rounded-e-full p-5">
              <img
                src={web}
                alt="web"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
                className="rounded-lg w-full rounded-e-full md:w-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:ml-4">
            <p className="text-4xl p-3 md:text-5xl font-semibold text-primary lg:text-left sm:text-center mb-4">
              Web Scraping
            </p>
            <p className="text-xl p-3 md:text-md text-white lg:text-left sm:text-center">
              Extract valuable information from websites and online sources to
              gain insights into market trends, competitor activities, and more.
              Survey and Feedback Collection: Capture the opinions and
              preferences of your target audience through professionally crafted
              surveys and feedback forms. Social Media Monitoring: Stay on top
              of social media trends and sentiments relevant to your brand,
              allowing you to engage effectively with your audience. Market
              Research: Access comprehensive data sets to analyze market
              dynamics, identify opportunities, and make informed strategic
              decisions. Custom Data Solutions: Have a specific data need? Our
              team of experts is ready to design a custom solution tailored to
              your unique requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-20">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 md:mx-8 mb-3 md:mb-5 font-semibold font-plus-jakarta-sans"
        >
          Partner with WebZoo for unparalleled data collection services. Let us
          be the catalyst for your business success. Contact us today to discuss
          how we can elevate your data strategy to new heights!
        </p>
      </div>
    </div>
  );
};

export default DataCollection;
