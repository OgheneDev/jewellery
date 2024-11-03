import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.png';

const Hero = () => {
  return (
    <section className="relative w-full px-[30px] pt-[100px] py-[40px] md:pb-[100px] md:pt-[210px]">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dgc8cd67w/video/upload/v1730620223/VID-20241102-WA0039_cs3niu.mp4"
        autoPlay
        loop
        muted
      />
      
      {/* Card content */}
      <div className="relative z-5 bg-card-bg w-[90%] max-w-[500px] mx-auto md:mx-0 text-background p-[30px]">
        <div className='flex flex-col gap-[20px] mb-[50px]'>
          <h1 className='text-4xl font-bold'>
            Get up to 30% off <br/>
            <span className='text-custom-pink'>New Arrivals</span>
          </h1>
          <p>Introducing our latest collection of products</p>
        </div>
        
        <Link to='/make-enquiries'>
          <button className='border border-background p-[10px] px-[20px] text-[12px] uppercase flex items-center gap-[10px]'>
            make custom jewellry
            <img src={arrow} alt="Arrow" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
