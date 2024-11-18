import React from 'react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
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
      
      {/* Overlay content */}
      <div className="relative z-5 card flex flex-col items-start gap-[20px] bg-card-bg px-[30px] py-[40px] md:w-[500px] md:ml-auto rounded-[10px]">
        <article className='flex flex-col gap-[20px]'>
            <span className='uppercase text-dark-gold'>Burn and CO.</span>
            <h1 className='text-4xl text-gold'>Follow from Modelling to Production</h1>
        </article>
        <p className='text-dark-gold'>Crafting Legacy Through Timeless Elegance and Bespoke Mastery, One Exquisite Piece at a Time.</p>
        <Link to='/make-enquiries'>
        <button className='text-white uppercase bg-gold py-[10px] px-[30px] md:py-[15px] md:px-[50px]'>Make an order</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutHero;

