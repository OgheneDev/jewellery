import React from 'react';
import { Link } from 'react-router-dom';

const Popular = ({ toggleChat }) => {
  
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
    ];

  return (
    <section className='px-[20px] md:px-[50px] pb-[50px]'>
      <h3 className="mx-auto text-text-color w-fit uppercase text-[18px] relative after:content-[''] after:block after:w-1/2 after:border-b-2 after:border-text-color after:mx-auto after:mt-1">Popular this week</h3>

      <div className="cards py-[50px] flex flex-col gap-[20px] md:gap-[30px] md:flex-row md:justify-center">
        {
            popularData.map((card, index) => (
                <div
                 key={index}
                 className='card w-[100%] text-text-color md:w-[265px]'
                >
                    <img src={card.image} alt="" className='w-[100%] mb-[10px]' />
                    <div className="text-content flex flex-col gap-[20px]">
                        <p>{card.name}</p>
                        <div className='flex justify-between'>
                            <p className='flex items-center md:gap-[10px] gap-[20px]'>
                                {card.discountPrice} 
                                <span className='text-discount line-through'>{card.originalPrice}</span>
                            </p>
                            <button 
                            className='bg-enquire text-white py-[10px] px-[20px] md:text-[12px] md:p-[10px]'
                            onClick={toggleChat}
                            >
                                Make Enquiries
                            </button>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>

      <div className="buttons flex gap-[30px] justify-center">
         <Link to='/make-enquiries'>
         <button className='bg-custom-red text-white border border-black text-[12px] py-[10px] px-[10px]'>
            MAKE CUSTOM JEWELLRY
         </button>
         </Link>
         <Link to='/make-enquiries'>
         <button className='border border-black uppercase text-[12px] py-[10px] px-[10px]'>
            Browse COllection
         </button>
         </Link>
      </div>
    </section>
  );
};

export default Popular;

