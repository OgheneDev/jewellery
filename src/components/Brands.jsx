import React from 'react'
import chanel from '../assets/images/chanel.png'
import dg from '../assets/images/dg.png'
import dior from '../assets/images/dior.png'
import versace from '../assets/images/versace.png'
import zara from '../assets/images/zara.png'
import gucci from '../assets/images/gucci.png'

const Brands = () => {
  return (
    <section className='px-[20px] pb-[50px]'>
      <h3 className='text-center text-text-color uppercase text-[18px]'>Brands for you</h3>

      <div className="container flex gap-[30px] justify-center py-[50px] flex-wrap">
        <img src={chanel} alt="" />
        <img src={dg} alt="" />
        <img src={dior} alt="" />
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
      </div>
    </section>
  )
}

export default Brands
