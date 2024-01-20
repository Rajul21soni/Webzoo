import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link, Events, scrollSpy } from "react-scroll";

const Footer = () => {
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
    <footer className=" text-white py-12 mt-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
          <img className="h-28 w-28 mb-4" src="https://www.torquevision.ai/assets/images/torqvision.png" alt="logo" />
          <h1 className="uppercase text-center text-primary  text-lg lg:text-xl mb-4">Determined AI Expert</h1>
        </div>
        <div className="text-center lg:text-left">
          <h1 data-aos="fade-up" data-aos-duration="500"    className="text-lg lg:text-xl mb-4">Quick Links</h1>
          <p className="mb-2">
          <Link
        to='about'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
        data-aos="fade-up" data-aos-duration="1000"
        className='p-3 md:p-4 hover:cursor-pointer w-40 sm:w-48 text-center  font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90'
      >
        About
      </Link>
          </p>
          <p className="mb-2">
          <Link
        to='Work'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
        data-aos="fade-up" data-aos-duration="1500"
        className='p-3 md:p-4 hover:cursor-pointer w-40 sm:w-48 text-center  font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90'
      >
        Work
      </Link>
          </p>
          <p className="mb-2">
          <Link
        to='Contact'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
        data-aos="fade-up" data-aos-duration="2000"
        className='p-3 md:p-4 hover:cursor-pointer w-40 sm:w-48 text-center  font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform  hover:text-primary hover:scale-90'
      >
        Contact
      </Link>
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center lg:text-left">
          <h1 data-aos="fade-up" data-aos-duration="500" className="text-lg lg:text-xl mb-4">Social Media</h1>
          <div className="flex justify-center lg:justify-start mt-4">
            <FaFacebook data-aos="fade-left" data-aos-duration="1000" className="text-2xl  mr-4" />
            <FaTwitter data-aos="fade-left" data-aos-duration="1000" className="text-2xl mr-4" />
            <FaGithub data-aos="fade-left" data-aos-duration="1000" className="text-2xl mr-4" />
            <FaInstagram data-aos="fade-left" data-aos-duration="1000" className="text-2xl" />
          </div>
        </div>
        <Link
        to='home1'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
        className='p-3 md:p-4 hover:cursor-pointer bg-primary w-40 sm:w-48 text-center font-plus-jakarta-sans text-white  rounded transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90'
      >
        Scroll to Top
      </Link>
      </div>
    </footer>
  );
};

export default Footer;
