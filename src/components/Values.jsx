import React from 'react'

const Values = () => {
  return (
    <section className='py-[50px] px-[30px]'>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Core Values</h3>

      <div className="vision text-dark-blue py-[40px]">
        <h2 className='font-bold text-3xl mb-[20px] text-center'>Our Mission & Vision</h2>

        <article className='mb-[30px]'>
            <h2 className='font-bold text-3xl mb-[20px]'>Mission</h2>
            <p>To create timeless, bespoke jewellery that embodies our clients’ vision and the artistry of fine craftsmanship. We are committed to delivering unparalleled quality and personalised service in every piece we design.</p>
        </article>

        <article>
            <h2 className='font-bold text-3xl mb-[20px]'>Vision</h2>
            <p></p>To be the leading choice for luxury jewelry worldwide, where every customer’s imagination is transformed into unique, hand-crafted designs that last a lifetime.
        </article>
      </div>
    </section>
  )
}

export default Values
