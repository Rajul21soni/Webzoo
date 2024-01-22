import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import Marquee from "react-fast-marquee";
import Marquee1 from "../assets/marquee1.webp";
import Marquee2 from "../assets/maarquee2.jpg";
import Marquee3 from "../assets/Maarquee3.jpeg";
import Marquee4 from "../assets/Maarquee4.png";
import Marquee5 from "../assets/Maarquee5.png";
import Marquee6 from "../assets/Maarquee6.jpeg";
import Marquee7 from "../assets/Maarquee7.webp";
import Marquee8 from "../assets/Maarquee8.jpg";
import cm from "../assets/cm.gif"

const ContentModeration = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
            ContentModeration
          </p>
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-primary text-center text-lg md:text-2xl mb-3 font-semibold font-plus-jakarta-sans"
        >
          Your Trusted Content Moderation Partner
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 mb-3 font-semibold font-plus-jakarta-sans"
        >
          In the dynamic world of online content, maintaining a safe and
          welcoming digital environment is paramount. At [Your Company Name], we
          take pride in being your trusted partner for comprehensive content
          moderation services. Our dedicated team of experts is committed to
          safeguarding your online community, ensuring a positive and secure
          experience for users.
        </p>
      </div>

      <div className="container mx-auto">
        <p className="text-lg  text-white font-semibold mb-4 text-center">
          Our Content Moderation Services
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
                src={cm}
                alt="cm"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
                className="rounded-lg w-full rounded-e-full md:w-auto"
              />
            </div>
          </div>
          <div className="w-full my-20 md:w-1/2 md:ml-4">
            <p className="text-4xl p-3 md:text-5xl font-semibold text-primary lg:text-left sm:text-center mb-4">
              Text Moderation
            </p>
            <p className="text-xl p-3 md:text-md text-white lg:text-left sm:text-center">
              Scrutinize and filter text content to identify and eliminate
              offensive language, hate speech, and other policy violations.
              Image and Video Moderation: Utilize advanced image recognition
              technology to detect and manage inappropriate or explicit visual
              content. User Profile Review: Ensure that user profiles comply
              with your platform's guidelines and standards, preventing the
              creation and spread of fake or harmful accounts. Community
              Guidelines Enforcement: Enforce your platform's community
              guidelines consistently to create a positive and respectful online
              environment. Live Chat Moderation: Monitor and moderate live chats
              and real-time interactions, maintaining a safe space for users to
              engage.
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
          Partner with WebZoo for unparalleled Content Moderation services. Let us
          be the catalyst for your business success. Contact us today to discuss
          how we can elevate your data strategy to new heights!
        </p>
      </div>
    </div>
  );
};

export default ContentModeration;
