import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/images/arrow.png'

const Hero = () => {
  return (
    <section className='w-full flex flex-col md:flex-row mb-[50px]'>
      <div className="w-full md:w-[70%] bg-hero-bg py-[50px] pt-[110px] md:py-[77px] md:pt-[160px] px-[20px] md:px-[50px]">
        <div className="bg-card-bg w-[90%] max-w-[500px] mx-auto md:mx-0 text-background p-[30px]">
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
      </div>
      
      <div className="w-full md:w-[30%]">
        <video 
        src="https://res.cloudinary.com/dgc8cd67w/video/upload/v1730620223/VID-20241102-WA0039_cs3niu.mp4"
        controls
        autoPlay
        loop
        ></video>
      </div>
    </section>
  )
}

export default Hero
