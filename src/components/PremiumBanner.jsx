import React from 'react'
import red from '../assets/images/red.svg'

const PremiumBanner = () => {
  return (
    <div className="premium p-[30px] bg-[url('/src/assets/images/woman.jpeg')] md:pt-[150px] bg-cover bg-no-repeat w-[100%] flex flex-col md:gap-[100px] gap-[50px] items-start">
        <article className='flex flex-col gap-[20px]'>
            <h1 className='text-4xl text-custom-blue'>PREMIUM <span className='text-custom-orange'>COLLECTIONS</span></h1>
            <button className='bg-white text-custom-orange py-[10px] px-[20px] w-fit flex gap-[10px] items-center'>SHOP NOW <img src={red} alt="" /></button>
        </article>

        <div className="timer flex gap-[30px] text-white">
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
  )
}

export default PremiumBanner
