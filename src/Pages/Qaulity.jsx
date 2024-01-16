import React from "react";
import { GrGallery } from "react-icons/gr";
import { AiOutlineAudio } from "react-icons/ai";
import { LuBarChart3 } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { BiRun } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import { BsPersonWalking } from "react-icons/bs";
import { PiDotsSixBold } from "react-icons/pi";
import { SiRoamresearch } from "react-icons/si";
import { CiMobile3 } from "react-icons/ci";

const Qaulity = () => {
  return (
    <div id="quality" className="container border rounded-xl mx-auto">
      <h1 className="text-primary text-center text-4xl font-bold font-plus-jakarta-sans">
        Our Qaulity
      </h1>
      <div className="flex flex-col justify-center lg:flex lg:flex-row lg:gap-4 mt-5">
        <div data-aos="flip-left" data-aos-duration="500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <GrGallery className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-lg md:text-xl mt-2 md:mt-3">
            Image Classification
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <AiOutlineAudio className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-center text-lg md:text-xl mt-2 md:mt-3">
            Audio based classification
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <LuBarChart3 className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-center text-lg md:text-xl mt-2 md:mt-3">
            Time Series Modeling
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <IoChatbubblesOutline className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-lg md:text-xl mt-2 md:mt-3">
            Question/Answer Bot
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <CgWebsite className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-center text-lg md:text-xl mt-2 md:mt-3">
            Text Classification
          </p>
        </div>
        <div data-aos="flip-left" data-aos-duration="3000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <MdOutlineGeneratingTokens className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-center text-lg md:text-xl mt-2 md:mt-3">
            Recommendation System
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:flex lg:flex-row lg:gap-4 mt-5">
        <div data-aos="flip-left" data-aos-duration="500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full ">
          <BiRun className="border rounded-full p-2 text-3xl md:text-5xl text-white" />
          <p className="text-white text-lg md:text-xl mt-2 md:mt-3">Object Tracking</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full">
          <TbGridDots className="border rounded-full p-2 text-5xl text-white" />
          <p className="text-white text-xl mt-3">Anomaly Detection</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="1500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full">
          <BsPersonWalking className="border rounded-full p-2 text-5xl text-white" />
          <p className="text-white text-xl mt-3">Pose Detection</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full">
          <PiDotsSixBold className="border rounded-full p-2 text-5xl text-white" />
          <p className="text-white text-xl text-center mt-3">Semantic Segmentation</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2500" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full">
          <SiRoamresearch className="border rounded-full p-2 text-5xl text-white" />
          <p className="text-white text-xl mt-3">Object Detection</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="3000" className="border rounded-lg flex flex-col items-center mt-2 hover:border-primary hover:scale-95 hover:cursor-pointer transition duration-[0.3s] ease-in-out justify-center p-5 md:p-10 w-full">
          <CiMobile3 className="border rounded-full p-2 text-5xl text-white" />
          <p className="text-white text-xl mt-3">Augmented Reality</p>
        </div>
      </div>
    </div>
  );
};

export default Qaulity;
