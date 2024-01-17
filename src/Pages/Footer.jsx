import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-12 mt-10 border-t-2">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
          <img className="h-28 w-28 mb-4" src="https://www.torquevision.ai/assets/images/torqvision.png" alt="logo" />
          <h1 className="uppercase text-center text-primary  text-lg lg:text-xl mb-4">Determined AI Expert</h1>
        </div>

        {/* Quick Links */}
        <div className="text-center lg:text-left">
          <h1 data-aos="fade-up" data-aos-duration="500"    className="text-lg lg:text-xl mb-4">Quick Links</h1>
          <p className="mb-2">
            <a href="#" data-aos="fade-left" data-aos-duration="500" className="text-gray-400 text-center hover:text-white">About</a>
          </p>
          <p className="mb-2">
            <a href="#" data-aos="fade-left" data-aos-duration="1000" className="text-gray-400 hover:text-white">Work</a>
          </p>
          <p className="mb-2">
            <a href="#" data-aos="fade-left" data-aos-duration="1500" className="text-gray-400 hover:text-white">Contact</a>
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
      </div>
    </footer>
  );
};

export default Footer;
