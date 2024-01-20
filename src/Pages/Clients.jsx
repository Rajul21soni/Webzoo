import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Clients = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div id="clients" className=" flex justify-center overflow-hidden  rounded-xl flex-col align-center container mx-auto  p-10 h-[400px]">
        <h1 data-aos="fade-left"
            data-aos-duration="500" className="text-white text-4xl text-center mb-20">Our Clients</h1>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          className="w-[90%] mx-auto flex gap-10"
        >
            <img data-aos="fade-right"
            data-aos-duration="500" className="h-20 object-contain mx-auto w-[90%]" src="https://www.torquevision.ai/assets/images/clients/lovin-dubai.png" alt="first" />
            <img data-aos="fade-right"
            data-aos-duration="1000" className="h-20 object-contain mx-auto w-[90%]" src="https://www.torquevision.ai/assets/images/clients/spider.png" alt="second" />
            <img data-aos="fade-right"
            data-aos-duration="1500" className="h-20 object-contain mx-auto w-[90%]" src="https://www.torquevision.ai/assets/images/clients/whs.png" alt="third" />
            <img data-aos="fade-right"
            data-aos-duration="2000" className="h-20 object-contain mx-auto w-[90%]" src="https://www.torquevision.ai/assets/images/clients/r3upnow.png" alt="fourth" />
            <img data-aos="fade-right"
            data-aos-duration="2500" className="h-20 object-contain mx-auto w-[90%]" src="https://www.torquevision.ai/assets/images/clients/lainsy.png" alt="fifth" />
        </Carousel>
      </div>
    </>
  );
};

export default Clients;