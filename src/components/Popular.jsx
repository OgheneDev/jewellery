import React from 'react'

const Popular = () => {
  
    const popularData = [
        {
            image:'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/medium-shot-underground-hip-hop-musician_safcaz.png',
            name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
            discountPrice: '$120.23',
            originalPrice: '$130.23'
        },
        {
            image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
            name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
            discountPrice: '90.00',
            originalPrice: '100.00'
        },
        {
            image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338176/luxury-shine-diamonds-digital-art-2_kdrwjb.png',
            name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
            discountPrice: '140.24',
            originalPrice: '150.11'
        },
        {
            image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/man-city-fashion-shoot_xmobif.png',
            name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
            discountPrice: '105.11',
            originalPrice: '120.23'
        }
    ]

  return (
    <section>
      <h3 className='text-center text-text-color uppercase text-[18px]'>Popular this week</h3>

      <div className="cards py-[50px]">
        {
            popularData.map((card, index) => (
                <div
                 key={index}
                 className='card'
                >
                    <img src={card.image} alt="" />
                    <div className="text-content">
                        <p>{card.name}</p>
                        <div>
                            <p>{card.discountPrice} <span>{card.originalPrice}</span></p>
                            <button>Make Enquiries</button>
                        </div>
                    </div>

                </div>
            ))
        }
      </div>
    </section>
  )
}

export default Popular
