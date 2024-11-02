import React from 'react'

const Highlights = () => {
  return (
    <section className="w-full py-[50px]">
      <h3 className="mx-auto mb-[30px] text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">
        This Week's Highlights
      </h3>

      <div className="container px-[20px] md:px-[30px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px]">
          {/* First item - 4 columns */}
          <div className="md:col-span-4">
            <div 
              className="bg-[url('/src/assets/images/birm.jpeg')] 
              bg-cover bg-no-repeat h-[400px] p-[20px] 
              flex flex-col justify-end"
            >
              <div className="text-white">
                <h1 className='text-4xl mb-[20px]'>Birmingham Museum Trust</h1>
                <div>
                  <article>
                    <h5 className='text-xl'>Exclusive Diamond</h5>
                    <span className='text-[13px]'>PRICE 20% OFF</span>
                  </article>
                  <p className='text-[14px]'>PRODUCT CODE - VATR3920</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second item - 8 columns */}
          <div className="md:col-span-8">
            <div 
              className="bg-[url('/src/assets/images/chain.png')] 
              bg-cover bg-no-repeat h-[400px]"
            >
            </div>
          </div>

          {/* Third item - 8 columns */}
          <div className="md:col-span-8">
            <div 
              className="bg-[url('/src/assets/images/tah.jpeg')] 
              bg-cover bg-no-repeat h-[400px] p-[20px] 
              flex flex-col justify-between"
            >
              <h1 className='text-4xl text-custom-brown'>New Tahila Doeel</h1>
              <div className='bg-custom-thing p-[10px]'>
                <article>
                  <h5 className='text-xl'>New Arrival</h5>
                  <span className='text-[13px]'>PRICE 20% OFF</span>
                </article>
                <p className='text-[14px]'>PRODUCT CODE - VATR39208</p>
              </div>
            </div>
          </div>

          {/* Fourth item - 4 columns */}
          <div className="md:col-span-4">
            <div 
              className="bg-[url('/src/assets/images/hos.jpeg')] 
              bg-cover bg-no-repeat h-[400px] p-[20px] 
              flex flex-col justify-between text-white"
            >
              <h1 className='text-4xl'>Hosniye Saeghi</h1>
              <div>
                <article>
                  <h5 className="text-xl">Exclusive Neckpiece 32g Gold</h5>
                  <span className='text-[13px]'>PRICE 20% OFF</span>
                </article>
                <p className='text-[14px]'>PRODUCT CODE - VATR3925</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights

