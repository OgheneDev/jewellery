import React from 'react'
import chanel from '../assets/images/chanel.png'
import dg from '../assets/images/dg.png'
import dior from '../assets/images/dior.png'
import versace from '../assets/images/versace.png'
import zara from '../assets/images/zara.png'
import gucci from '../assets/images/gucci.png'
import red from '../assets/images/red.svg'

const Brands = () => {
  return (
    <section className='px-[20px] md:px-[100px] pb-[50px]'>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Brands for you</h3>

      <div className="container flex gap-[30px] justify-center py-[50px] flex-wrap">
        <img src={chanel} alt="" />
        <img src={dg} alt="" />
        <img src={dior} alt="" />
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
      </div>

      <div className="premium p-[30px] bg-[url('/src/assets/images/woman.jpeg')] md:pt-[150px] bg-cover bg-no-repeat w-[100%] flex flex-col md:gap-[100px] gap-[50px] items-start">
        <article className='flex flex-col gap-[20px]'>
            <h1 className='text-4xl text-custom-blue'>PREMIUM <span className='text-custom-orange'>COLLECTIONS</span></h1>
            <button className='bg-white text-custom-orange py-[10px] px-[20px] w-fit flex gap-[10px] items-center'>SHOP NOW <img src={red} alt="" /></button>
        </article>

        <div className="timer flex gap-[20px] text-white">
            <div className="day flex gap-[10px] flex-col">
                <h5>05</h5>
                <span>Days</span>
            </div>

            <div className="hour flex gap-[10px] flex-col">
                <h5>08</h5>
                <span>Hours</span>
            </div>

            <div className="min flex gap-[10px] flex-col">
                <h5>04</h5>
                <span>Minutes</span>
            </div>

            <h5>:</h5>

            <div className="sec flex gap-[10px] flex-col">
                <h5>05</h5>
                <span>Seconds</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
