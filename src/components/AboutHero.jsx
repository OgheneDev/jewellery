import React from 'react'

const AboutHero = () => {
  return (
    <section className="bg-[url('/src/assets/images/bg.png')] bg-cover md:bg-[length:100%] bg-no-repeat w-full px-[30px] pt-[100px] py-[40px] md:pb-[100px] md:pt-[210px]">
      <div className="card flex flex-col items-start gap-[20px] bg-card-bg px-[30px] py-[40px] md:w-[500px] md:ml-auto rounded-[10px]">
        <article className='flex flex-col gap-[20px]'>
            <span className='uppercase text-dark-gold'>Burn and CO.</span>
            <h1 className='text-4xl text-gold'>Follow from Modelling to Production</h1>
        </article>
        <p className='text-dark-gold'>Crafting Legacy Through Timeless Elegance and Bespoke Mastery, One Exquisite Piece at a Time.</p>
        <button className='text-white uppercase bg-gold py-[10px] px-[30px] md:py-[15px] md:px-[50px]'>Make an order</button>
      </div>
    </section>
  )
}

export default AboutHero
