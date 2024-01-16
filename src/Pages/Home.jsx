import React, { useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
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
    <div id='home1' className='min-h-screen flex flex-col justify-center items-center'>
      <h1 data-aos="fade-up" data-aos-duration="500" className='text-white text-4xl md:text-6xl mx-4 md:mx-8 mb-3 md:mb-5 font-bold w-full text-center font-plus-jakarta-sans'>
        TORQUEVISION LABS
      </h1>
      <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-lg md:text-2xl mx-4 md:mx-8 mb-3 md:mb-5 font-semibold font-plus-jakarta-sans'>
        DETERMINED AI EXPERT
      </p>
      <Link
        to='about'
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={handleSetActive}
        data-aos="fade-up" data-aos-duration="1500"
        className='p-3 md:p-4 hover:cursor-pointer w-40 sm:w-48 text-center bg-white font-plus-jakarta-sans text-black  rounded transition duration-500 ease-in-out transform hover:bg-black hover:text-white hover:scale-90'
      >
        Explore More
      </Link>
    </div>
  );
};

export default Home;

