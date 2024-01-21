import React from "react";
import imgAno from "../assets/imgAno.gif";
import text from "../assets/text.gif";
import video from "../assets/video.gif"
import image from "../assets/image.gif"
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const DataAnnotation = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-10 w-full">
        <NavLink to={'/'} className="p-3 ml-5 md:p-4 mb-10 hover:cursor-pointer bg-primary text-center flex font-plus-jakarta-sans text-white w-20   rounded-full transition duration-500 ease-in-out transform hover:bg-white hover:text-black hover:scale-90">< TiArrowBack className="text-4xl ml-2"/></NavLink>
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
          Data Annotation - Empowering AI with Accurate Data Labeling
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          className="text-white text-center md:text-lg mx-4 md:mx-8 mb-3 md:mb-5 font-semibold font-plus-jakarta-sans"
        >
          Unlock the true potential of your AI models with Precision
          Annotations, your trusted partner in providing high-quality data
          annotation services. We understand that the success of your machine
          learning applications relies on accurate and meticulously annotated
          data. Our team of skilled annotators and cutting-edge technology
          ensure that your data is labeled with precision, setting the
          foundation for robust AI models.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:w-3/4 lg:w-1/2 xl:w-1/2">
        <div className="md:w-1/2 overflow-hidden rounded-e-full">
          <div className="bg-primary rounded-xl p-5">
            <img
              src={imgAno}
              alt="imgAno"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="rounded-e-full w-full md:w-auto"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 md:ml-4">
          <p class="text-4xl md:text-5xl font-semibold text-primary lg:text-right sm:text-center mb-4">
            Image Annotation
          </p>
          <p class="text-xl md:text-md text-white lg:text-right sm:text-center">
            In machine learning and deep learning, image annotation is the
            process of labeling or classifying an image using text, annotation
            tools, or both, to show the data features you want your model to
            recognize on its own. When you annotate an image, you are adding
            metadata to a dataset.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 md:w-3/4 lg:w-1/2 xl:w-1/2">
        <div class="w-full md:w-1/2 md:ml-4">
          <p class="text-4xl md:text-5xl font-semibold text-primary lg:text-left sm:text-center mb-4">
          Text Annotation
          </p>
          <p class="text-xl md:text-md text-white lg:text-left sm:text-center">
          Text annotation is the practice and the result of adding a note or gloss to a text, which may include highlights or underlining, comments, footnotes, tags, and links. Text annotations can include notes written for a reader's private purposes, as well as shared annotations written for the purposes of collaborative writing and editing, commentary, or social reading and sharing
          </p>
        </div>
        <div className="md:w-1/2 overflow-hidden rounded-s-full">
          <div className="bg-primary rounded-xl p-5">
            <img
              src={text}
              alt="text"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="rounded-s-full w-full md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col my-10 md:flex-row items-center md:w-3/4 lg:w-1/2 xl:w-1/2">
        <div className="md:w-1/2 overflow-hidden rounded-e-full">
          <div className="bg-primary rounded-xl p-5">
            <img
              src={video}
              alt="video"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="rounded-e-full w-full md:w-auto"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 md:ml-4">
          <p class="text-4xl md:text-5xl font-semibold text-primary lg:text-right sm:text-center mb-4">
          Video Annotation
          </p>
          <p class="text-xl md:text-md text-white lg:text-right sm:text-center">
          Video annotation is the process of labeling or tagging video clips which are used for training computer vision models to detect or identify objects. Unlike image annotation, video annotation involves annotating objects on a frame-by-frame basis to make them recognizable for machine learning models.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-10 md:w-3/4 lg:w-1/2 xl:w-1/2">
        <div class="w-full md:w-1/2 md:ml-4">
          <p class="text-4xl md:text-5xl font-semibold text-primary lg:text-left sm:text-center mb-4">
          Audio Annotation
          </p>
          <p class="text-xl md:text-md text-white lg:text-left sm:text-center">
          Audio annotation is the process of adding metadata to an audio recording file to describe its content and make it machine readable and to train NLP systems. The audio may come from people, instruments, animals, the environment, or further sources. The metadata can include things like the date and time the audio was recorded, who recorded it, what it is about, and any other relevant information.s
          </p>
        </div>
        <div className="md:w-1/2 overflow-hidden rounded-s-full">
          <div className="bg-primary rounded-xl p-5">
            <img
              src={image}
              alt="image"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              className="rounded-s-full w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnnotation;
