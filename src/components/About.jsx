import React from 'react'
import image from '../assets/images/image.png'

const About = () => {
  return (
    <section className='flex flex-col-reverse md:flex-row md:gap-[100px] md:pt-[50px] md:px-[100px] p-[30px] gap-[40px]'>
      <div className="text-content flex flex-col gap-[20px] text-paragrah md:w-full">
        <span className='text-custom-red uppercase'>Largest Jewellery platform</span>
        <p>At the heart of Burn and Co’s creations lies a commitment to personalization, ensuring that each piece tells a unique story. The design process invites clients to collaborate with master jewelers, allowing their vision to be intricately woven into the final product. From custom engagement rings to one-of-a-kind statement pieces, Burn and Co transforms ideas into exquisite jewelry that becomes part of the client's personal legacy. This level of intimacy and attention to detail has built a loyal client base that spans generations, as families return to Burn and Co to commemorate their most cherished moments.</p>
        <p>urn and Co’s reputation has also grown beyond its boutique origins, earning accolades within the global luxury industry and gracing red carpets and exclusive events. The brand’s timeless designs have attracted celebrities, royalty, and discerning patrons from around the world, further establishing its status as a symbol of sophistication and prestige. As Burn and Co looks toward the future, it continues to balance tradition with innovation, remaining dedicated to creating jewelry that not only adorns but also inspires.</p>
      </div>

      <div className="image-content md:w-full">
        <img src={image} alt="" className='md:w-full' />
      </div>
    </section>
  )
}

export default About
