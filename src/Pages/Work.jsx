import React, { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import ImageAno from "../assets/imageAno.gif"
import mv from "../assets/mv.gif"
import cm from "../assets/cm.gif"
import vi from "../assets/vi.gif"
import ds1 from "../assets/ds1.gif"
import { NavLink } from "react-router-dom";

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
    <div id="work" className="container rounded-xl  mx-auto">
      <h1 className="text-primary text-5xl text-center font-semibold font-plus-jakarta-sans mt-10">
        Our Work
      </h1>
      <p className="text-[16px] text-center my-10 text-white capitalize">
        Some of the many solutions our clients are happy with.
      </p>
      <div className="flex flex-wrap justify-between gap-3">
        <Link
          to="slide1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          className="p-3 hover:cursor-pointer bg-primary text-white w-full md:w-auto rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          Data Annotation
        </Link>
        <Link
          to="slide2"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          className="p-3 hover:cursor-pointer bg-primary text-white w-full md:w-auto rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          Data Collection
        </Link>
        <Link
          to="slide3"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          className="p-3 hover:cursor-pointer bg-primary text-white w-full md:w-auto  rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          Content Moderation
        </Link>
        <Link
          to="slide4"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          className="p-3 hover:cursor-pointer bg-primary text-white w-full md:w-auto rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          Visual Inspection
        </Link>
        <Link
          to="slide5"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          className="p-3 hover:cursor-pointer bg-primary text-white w-full md:w-auto    rounded transition duration-500 text-center ease-in-out transform hover:bg-white hover:text-black hover:scale-90"
        >
          Data Scraping
        </Link>
      </div>

      <div
        id="slide1"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="text-4xl font-semibold my-10 text-white text-center md:text-left"
          >
            Data Annotation
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            className="text-xl font-semibold my-10 text-primary text-center md:text-left"
          >
            Computer vision-based Data Annotation .
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            className="text-md font-semibold text-white text-center md:text-left"
          >
            Data annotation is the process of labeling data available in a
            video, image or text. The data is labeled, so that models can easily
            comprehend a given data source and recognize certain formats,
            objects, information, or patterns in the future
          </p>
          <div data-aos="fade-up"
          data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-10">
          <NavLink
          to={'/dataannotation'}
          className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
          "
          >
            Read More
          </NavLink>
          </div>
        </div>
        <div className="my-10 md:w-1/2 flex justify-center">
          <img
            src={ImageAno}
            alt="Data annotation"
            className="max-w-full rounded-3xl h-auto"
          />
        </div>
      </div>
      <div
        id="slide2"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl font-semibold my-10 text-white text-center md:text-left"
          >
            Data Collection   
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl font-semibold my-10 text-primary text-center md:text-left"
          >
            Data Collection for a smarter and efficient workflow.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-md font-semibold text-white text-center md:text-left"
          >
           Data collection is the process of gathering and measuring information on variables of interest, in an established systematic fashion that enables one to answer stated research questions, test hypotheses, and evaluate outcomes.
          </p>
          <div data-aos="fade-up"
          data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-10">
          <NavLink
          to={'/datacollection'}
            className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
            
"
          >
            Read More
          </NavLink>
          </div>
        </div>
        <div className="my-10 md:w-1/2 flex justify-center">
          <img
            src={mv}
            alt="Data Collection"
            className="max-w-full rounded-3xl h-auto"
          />
        </div>
      </div>
      <div
        id="slide3"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl font-semibold my-10 text-white text-center md:text-left"
          >
            Content Moderation
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl font-semibold my-10 text-primary text-center md:text-left"
          >
            Computer vision in Content Moderation.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-md font-semibold text-white text-center md:text-left"
          >
             Content Moderation is the process of reviewing and monitoring user-generated content on online platforms to ensure that it meets certain standards and guidelines. This includes removing inappropriate or offensive content and enforcing community guidelines and terms of service
          </p>
          <div data-aos="fade-up"
          data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-10">
          <NavLink
          to={'/contentmoderation'}
            className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
            
"
          >
            Read More
          </NavLink>
          </div>
        </div>
        <div className="my-10 md:w-1/2 flex justify-center">
          <img
            src={cm}
            alt="Content Moderation"
            className="max-w-full rounded-3xl h-auto"
          />
        </div>
      </div>
      <div
        id="slide4"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl font-semibold my-10 text-white text-center md:text-left"
          >
            Visual Inspection
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl font-semibold my-10 text-primary text-center md:text-left"
          >
            Get valuable insights from user interactions and data around the
            globe.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-md font-semibold text-white text-center md:text-left"
          >
             Visual inspection is a technique for detecting defects using the naked eye to ensure equipment is working properly or that manufactured products are being made to specification.
          </p>
          <div data-aos="fade-up"
          data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-10">
          <NavLink
          to={'/visualinspection'}
          className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
          "
          >
            Read More
          </NavLink>
          </div>
        </div>
        <div className="my-10 md:w-1/2 flex justify-center">
          <img
            src={vi}
            alt="Visual Inspection"
            className="max-w-full  rounded-3xl h-auto"
          />
        </div>
      </div>
      <div
        id="slide5"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="md:w-1/2">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-4xl font-semibold my-10 text-white text-center md:text-left"
          >
            Data Scraping 
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xl font-semibold my-10 text-primary text-center md:text-left"
          >
            Computer program extracts data from output generated from another program.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-md font-semibold text-white text-center md:text-left"
          >
            Data Scraping  is a technique in which a computer program extracts data from output generated from another program. Data scraping is commonly manifest in web scraping, the process of using an application to extract valuable information from a website.
          </p>
          <div data-aos="fade-up"
          data-aos-duration="2000" data-aos-easing="ease-in-sine" className="mt-10">
          <NavLink
          to={'/datascraping'}
          className="p-3 md:p-4 mt-10 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
          "
          >
            Read More
          </NavLink>
          </div>
        </div>
        <div className="my-5 md:w-1/2 flex justify-center">
          <img
            src={ds1}
            alt="Data Scraping"
            className="max-w-full rounded-3xl h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
