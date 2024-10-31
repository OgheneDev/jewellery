import React from 'react'
import chanel from '../assets/images/chanel.png'
import dg from '../assets/images/dg.png'
import dior from '../assets/images/dior.png'
import versace from '../assets/images/versace.png'
import zara from '../assets/images/zara.png'
import gucci from '../assets/images/gucci.png'


const BrandHeader = () => {
  return (
    <section>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Brands for you</h3>

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

export default BrandHeader
