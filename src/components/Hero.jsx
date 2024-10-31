import React from 'react'
import vid from '../assets/videos/vid.png'
import arrow from '../assets/images/arrow.png'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row mb-[50px] md:w-full h-[520px]'>
       <div className="custom bg-hero-bg py-[100px] md:px-[50px] md:py-[100px] md:w-[70%]">
          <div className="card bg-card-bg w-[85%] mx-auto md:mx-0 text-background p-[30px] md:w-fit">
            <article className='flex flex-col gap-[20px] mb-[50px]'>
              <h1 className='text-4xl font-bold '>Get up to 30% off <br/> <span className='text-custom-pink'>New Arrivals</span></h1>
              <p>Introducing our latest collection of products</p>
            </article>

            <button className='border border-background p-[10px] uppercase flex items-center gap-[10px]'>
              make custom jewellry
              <img src={arrow} alt="" />
            </button>
          </div>
       </div>

       <div className="video-container ">
        <img src={vid} alt="" className='h-[100%]' />
       </div>
    </section>
  )
}

export default Hero
