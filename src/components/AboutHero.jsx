import React from 'react'

const AboutHero = () => {
  return (
    <section className="bg-[url('/src/assets/videos/vid.png')] bg-cover bg-no-repeat w-full px-[30px] py-[40px]">
      <div className="card flex flex-col items-start gap-[20px] bg-card-bg px-[30px] py-[40px] rounded">
        <article className='flex flex-col gap-[20px]'>
            <span className='uppercase text-dark-gold'>Burn and CO.</span>
            <h1 className='text-4xl text-gold'>Follow from Modelling to Production</h1>
        </article>
        <p className='text-dark-gold'>Crafting Legacy Through Timeless Elegance and Bespoke Mastery, One Exquisite Piece at a Time.</p>
        <button className='text-white uppercase bg-gold py-[10px] px-[30px]'>Make an order</button>
      </div>
    </section>
  )
}

export default AboutHero
