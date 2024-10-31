import React from 'react'

const Highlights = () => {
  return (
    <section>
      <h3 className='text-center text-text-color uppercase text-[18px]'>This weeks Highlights</h3>

      <div className="container py-[50px] px-[20px] text-background flex flex-col gap-[30px]">
       <div className="bg-[url('/src/assets/images/birm.jpeg')] bg-cover w-[100%] p-[20px] bg-no-repeat pt-[100px]">
         <h1 className=' text-5xl mb-[60px]'>Birmingham Museum Trust</h1>
         <div>
            <article>
                <h5 className='text-1xl'>Exclusive Diamond</h5>
                <span className='text-[13px]'>PRICE 20% OFF</span>
            </article>
            <p className='text-[14px]'>PRODUCT CODE - VATR3920</p>
         </div>
        </div>

        <div className= "bg-[url('/src/assets/images/chain.png')] bg-cover w-[100%] bg-no-repeat h-[400px]"></div>

        <div className="bg-[url('/src/assets/images/tah.jpeg')] px-[20px] py-[20px] pt-[30px] flex flex-col gap-[100px] bg-cover w-[100%] bg-no-repeat">
            <h1 className='text-5xl text-custom-brown'>New Tahila Doeel</h1>
            <div className='bg-custom-thing'>
            <article>
                <h5 className='text-1xl'>New Arrival</h5>
                <span className='text-[13px]'>PRICE 20% OFF</span>
            </article>
            <p className='text-[14px]'>PRODUCT CODE - VATR39208</p>
         </div>
        </div>

        <div className="bg-[url('/src/assets/images/hos.jpeg')] bg-cover w-[100%] flex flex-col gap-[60px] p-[20px] bg-no-repeat pt-[100px]">
           <h1 className='text-5xl'>Hosniye Saeghi</h1>
           <div>
            <article>
                <h5 className="text-1xl">Exclusive Neckpiece 32g Gold</h5>
                <span className='text-[13px]'>PRICE 20% OFF</span>
            </article>
            <p className='text-[14px]'>PRODUCT CODE - VATR3925</p>
           </div>

        </div>
        
      </div>
    </section>
  )
}

export default Highlights
