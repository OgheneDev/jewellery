import React from 'react'
import vid from '../assets/videos/vid.png'
import arrow from '../assets/images/arrow.png'

const Hero = () => {
  return (
    <section className='w-full flex flex-col md:flex-row mb-[50px]'>
      <div className="w-full md:w-[70%] bg-hero-bg py-[50px] md:py-[100px] px-[20px] md:px-[50px]">
        <div className="bg-card-bg w-[90%] max-w-[500px] mx-auto md:mx-0 text-background p-[30px]">
          <div className='flex flex-col gap-[20px] mb-[50px]'>
            <h1 className='text-4xl font-bold'>
              Get up to 30% off <br/> 
              <span className='text-custom-pink'>New Arrivals</span>
            </h1>
            <p>Introducing our latest collection of products</p>
          </div>
              
          <button className='border border-background p-[10px] uppercase flex items-center gap-[10px]'>
            make custom jewellry
            <img src={arrow} alt="Arrow" />
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-[30%]">
        <img 
          src={vid} 
          alt="Video thumbnail" 
          className='w-full h-auto object-cover'
        />
      </div>
    </section>
  )
}

export default Hero
