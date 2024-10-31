import React from 'react'

const Overview = () => {
  return (
    <section className='px-[30px] py-[50px]'>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Company's Overview</h3>

      <div className="container text-paragraph flex flex-col gap-[30px] py-[30px]">
        <article>
            <h2 className='font-bold text-3xl mb-[30px]'>Craftmanship</h2>
            <p className='text-[18px]'>We pride ourselves on the art and precision of our work. Every piece is meticulously crafted by our master artisans, ensuring the highest standards of quality.</p>
        </article>
        <article>
           <h2 className='font-bold text-3xl mb-[30px]'>Customer - Centric</h2>
           <p className='text-[18px]'>We value our clients’ vision and strive to make their dream jewelry a reality, ensuring personalized service from concept to completion.</p>
        </article>
        <article>
            <h2 className='font-bold text-3xl mb-[30px]'>Integrity</h2>
            <p className='text-[18px]'>Transparency and trust are at the heart of our business. From initial consultations to the final product, we are committed to honesty and clear communication.</p>
        </article>
      </div>
    </section>
  )
}

export default Overview
