import React from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const DataCollection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10 w-full">
        <NavLink
          to={"/"}
          className="p-3 ml-5 md:p-4 mb-10 hover:cursor-pointer bg-primary text-center flex font-plus-jakarta-sans text-white w-20   rounded-full transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          <TiArrowBack className="text-4xl ml-2" />
        </NavLink>
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="text-white text-4xl md:text-6xl mx-4 md:mx-8 mb-3 md:mb-5 font-bold w-full text-center font-plus-jakarta-sans"
        >
          Data Annotation
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-lg md:text-2xl mx-4 md:mx-8 mb-3 md:mb-5 font-semibold font-plus-jakarta-sans"
        >
          Your Trusted Data Collection Partner
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration ="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 md:mx-8 mb-3 md:mb-5 font-semibold font-plus-jakarta-sans"
        >
          In today's fast-paced digital world, data is the heartbeat of every
          successful business. At WebZoo, we understand the critical role that
          accurate and relevant data plays in driving informed decision-making.
          Our data collection service is designed to empower your organization
          with the most up-to-date and comprehensive information, giving you a
          competitive edge in the market.
        </p>
      </div>
    </div>
  );
};

export default DataCollection;
