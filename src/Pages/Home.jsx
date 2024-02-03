import React, { useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import banner from "../assets/banner-img.png";
import './Home.css';

const Home = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div id='home1' className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <div className='flex flex-col justify-center md:w-1/2'>
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className='text-white text-4xl md:text-6xl  font-bold w-full text-center font-plus-jakarta-sans'
        >
          WEBZOO
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className='text-white my-4 text-lg text-center md:text-2xl  font-semibold font-plus-jakarta-sans'
        >
          DETERMINED AI EXPERT
        </p>
        <div className='flex justify-center mt-4'>
        <Link
          to='about'
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={handleSetActive}
          data-aos="fade-right"
          data-aos-duration="1500"
          className='p-3 md:p-4 hover:cursor-pointer w-40 lg:w-48 text-center bg-white font-plus-jakarta-sans text-black rounded transition duration-500 ease-in-out transform hover:bg-primary hover:text-white hover:scale-90'
        >
          Explore More
        </Link>
        </div>
      </div>
      
      <div data-aos="fade-left"
          data-aos-duration="1000"  className='w-full imgbox lg:flex lg:justify-center lg:w-1/2 hidden'>

        <img src={banner} alt='banner' className='w-[60%] h-[60%]' />
      </div>
    </div>
  );
};

export default Home;
