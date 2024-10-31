import React from 'react'

const Process = () => {
  return (
    <section className='p-[30px]'>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Design Process</h3>

      <div className="process text-dark-blue flex flex-col gap-[20px] mt-[50px]">
        <article>
            <h3 className='font-bold text-2xl'>Consultation</h3>
            <p>Clients can reach out via the website, phone, or in-person meetings to discuss their design ideas.</p>
        </article>
        <article>
            <h3 className='font-bold text-2xl'>Design Proposal</h3>
            <p> Our designers create sketches or 3D models based on the client’s vision and input.</p>
        </article>
        <article>
            <h3 className='font-bold text-2xl'>Approval & Billing</h3>
            <p>Once the client is satisfied with the design, we provide an estimate and request an advance payment to start production.</p>
        </article>
        <article>
            <h3 className='font-bold text-2xl'>Crafting</h3>
            <p>Our artisans begin handcrafting the piece, ensuring each detail aligns with the client’s expectations.</p>
        </article>
        <article>
            <h3 className='font-bold text-2xl'>Final Review</h3>
            <p> Once completed, the piece is presented to the client for approval, and final payment is made.</p>
        </article>
      </div>
    </section>
  )
}

export default Process
