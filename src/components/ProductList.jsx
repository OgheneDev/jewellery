import React, { useState } from 'react';

const ProductList = ({ toggleChat }) => {
  // Function to generate random prices and discounts
  const getRandomPriceData = () => {
    const originalPrice = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    const discountPercentage = [3, 5, 10][Math.floor(Math.random() * 3)];
    const discountPrice = originalPrice - (originalPrice * discountPercentage / 100);
    const orders = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    return {
      originalPrice: `$${originalPrice.toLocaleString()}`,
      discountPrice: `$${discountPrice.toFixed(2)}`,
      orders: `${orders} orders`,
    };
  };

  const productData = [
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1730338177/luxury-shine-diamonds-digital-art_m7cm85.png',
      name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Necklace',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731940759/25632006_56027826_1000_o3cova.jpg',
      name: 'Essential diamond tennis bracelet',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731940762/23961894_54073964_1000_n3axyl.jpg',
      name: 'Crystal Medusa 95 earrings',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731941457/24662464_54763333_1000_q02wct.jpg',
      name: 'Cross-pendant drop earrings',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731941753/23444588_53869746_1000_yja6xg.jpg',
      name: 'VLogo crystal necklace',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731941560/18660618_40894986_1000_f3e8sh.jpg',
      name: '2009 pre-owned Royal Oak Chrono 41mm',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731942005/15900028_29510762_1000_baqciz.jpg',
      name: '2021 unworn Nautilus 40mm',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731942163/25615778_56448606_1000_bgaabq.jpg',
      name: '2020 pre-owned Daytona 40mm',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731942257/20050368_45263916_1000_mm9h3s.jpg',
      name: 'Alpine Eagle XL Chrono 44mm',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731942351/22889821_52887232_1000_cbsvjf.jpg',
      name: '2016 pre-owned Royal Oak Offshore Chronograph 42mm',
      ...getRandomPriceData(),
    },
    {
      image: 'https://res.cloudinary.com/dgc8cd67w/image/upload/v1731942491/23793222_53709914_1000_fu9gju.jpg',
      name: '2020 pre-owned Nautilus 40.5mm',
      ...getRandomPriceData(),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="cards pb-[50px] px-[20px] pt-[50px] md:pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[30px]">
        {currentItems.map((card, index) => (
          <div
            key={index}
            className="card w-[100%] text-text-color md:w-[250px]"
          >
            <img src={card.image} alt="" className="w-[100%] mb-[10px]" />
            <div className="text-content flex flex-col gap-[20px]">
              <p>{card.name}</p>
              <div className="flex justify-between">
                <p>{card.discountPrice}</p>
                <p>{card.orders}</p>
              </div>

              <div className="flex justify-between">
                <span className="line-through">{card.originalPrice}</span>
                <span className="text-white p-[5px] text-[12px] bg-[#111827]">New Arrivals</span>
              </div>
              <button
                className="bg-enquire text-white py-[10px] px-[20px] md:text-[14px] md:p-[10px]"
                onClick={toggleChat}
              >
                Make Enquiries
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center space-x-2 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 border ${
              currentPage === index + 1 
                ? 'bg-enquire text-white' 
                : 'bg-white text-enquire hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;