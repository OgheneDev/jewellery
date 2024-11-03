import React from 'react'

const ProductList = ({ toggleChat }) => {

  const productData = [
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
    {
        image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
        name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
        discountPrice: '$120.23',
        originalPrice: '$130.23',
        orders: '24 orders'
    },
  ]

  return (
    <div>
      <div className="cards pb-[50px] px-[20px] pt-[50px] md:pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-[20px] md:gap-[30px]">
        {
            productData.map((card, index) => (
                <div
                 key={index}
                 className='card w-[100%] text-text-color md:w-[250px]'
                >
                    <img src={card.image} alt="" className='w-[100%] mb-[10px]' />
                    <div className="text-content flex flex-col gap-[20px]">
                        <p>{card.name}</p>
                        <div className='flex justify-between'>
                            <p className=''>
                                {card.discountPrice} 
                            </p>
                            <p>{card.orders}</p>
                        </div>

                        <div className="flex justify-between">
                             <span className=' line-through'>{card.originalPrice}</span>
                             <span className='text-white p-[5px] text-[12px] bg-[#111827]'>New Arrivals</span>
                        </div>
                        <button
                         className='bg-enquire text-white py-[10px] px-[20px] md:text-[14px] md:p-[10px]'
                         onClick={toggleChat}
                         >Make Enquiries</button>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ProductList
