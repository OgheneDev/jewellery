import React from 'react'
import vid from '../assets/videos/vid.png'
import arrow from '../assets/images/arrow.png'

const Hero = () => {
  return (
    <section className='flex flex-col mb-[50px]'>
       <div className="custom bg-hero-bg py-[100px]">
          <div className="card bg-card-bg w-[85%] mx-auto text-background p-[30px]">
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

       <div className="video-container">
        <img src={vid} alt="" />
       </div>
    </section>
  )
}

export default Hero
