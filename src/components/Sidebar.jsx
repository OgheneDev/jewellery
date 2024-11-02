import React, { useState } from 'react'

const Sidebar = () => {
  // State for range slider
  const [weight, setWeight] = useState(225.0);

  // State for selections
  const [selections, setSelections] = useState({
    gender: [],
    material: [],
    category: [],
    size: []
  });

  // Pricing data
  const PRICING = {
    gender: {
      Women: 500,
      Men: 600,
      Youth: 400
    },
    material: {
      Gold: 2000,
      Diamond: 5000,
      Emerald: 3000,
      Ruby: 3500,
      Onyx: 2500,
      Chalcedony: 1500,
      Opal: 2200,
      Amethyst: 1800,
      Topaz: 1600
    },
    category: {
      Rings: 800,
      Bracelets: 1200,
      Necklace: 1500,
      Earrings: 600,
      'Nose Rings': 450
    },
    size: {
      Small: 300,
      Medium: 500,
      Large: 700,
      'Extra Large': 900
    }
  };

  // Handle range slider change
  const handleWeightChange = (event) => {
    setWeight(parseFloat(event.target.value));
  };

  // Handle checkbox selection
  const handleCheckboxChange = (category, value) => {
    setSelections(prev => {
      const currentSelections = prev[category];
      const newSelections = currentSelections.includes(value)
        ? currentSelections.filter(item => item !== value)
        : [...currentSelections, value];
      
      return {
        ...prev,
        [category]: newSelections
      };
    });
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    let totalPrice = 1000; // Base price

    // Add price for weight (price per gram)
    totalPrice += weight * 10; // $10 per gram

    // Add prices for selections
    Object.entries(selections).forEach(([category, selectedItems]) => {
      selectedItems.forEach(item => {
        if (PRICING[category][item]) {
          totalPrice += PRICING[category][item];
        }
      });
    });

    return Math.min(totalPrice, 6000); // Cap at $6000
  };

  // Render checkbox group
  const renderCheckboxGroup = (category, items) => (
    <div className="category flex flex-col gap-[20px]">
      <h5 className='text-[13px] uppercase'>{category}</h5>
      <div className="form-groups flex flex-col gap-[10px]">
        {items.map(item => (
          <div key={item} className="form-group flex gap-[10px] items-center text-[13px]">
            <input 
              type="checkbox" 
              id={item.toLowerCase().replace(' ', '')}
              checked={selections[category.toLowerCase()].includes(item)}
              onChange={() => handleCheckboxChange(category.toLowerCase(), item)}
            />
            <label htmlFor={item.toLowerCase().replace(' ', '')}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='bg-background w-[250px] py-[40px] px-[20px] text-card-bg hidden md:block'>
      <h5 className='uppercase text-[13px] mb-[30px]'>Make custom jewelries</h5>

      <div className="range-slider mb-[30px]">
        <div className="">
          <div className="flex justify-between items-center">
            <span className='text-card-bg text-sm'>Measurements</span>
            <span className="text-sm">0.1 g - 250 g</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="250"
            step="0.1"
            value={weight}
            onChange={handleWeightChange}
            className="w-full h-2 bg-[#EB5757] rounded-full appearance-none cursor-pointer focus:outline-none"
          />
          <div className="flex justify-between items center">
            <span className="text-card-bg text-sm">Selected gram</span>
            <span className="text-sm font-medium">{weight.toFixed(1)} g</span>
          </div>
        </div>
      </div>

      <div className="categories flex flex-col gap-[20px]">
        {renderCheckboxGroup('Gender', ['Women', 'Men', 'Youth'])}
        {renderCheckboxGroup('Material', ['Gold', 'Diamond', 'Emerald', 'Ruby', 'Onyx', 'Chalcedony', 'Opal', 'Amethyst', 'Topaz'])}
        {renderCheckboxGroup('Category', ['Rings', 'Bracelets', 'Necklace', 'Earrings', 'Nose Rings'])}
        {renderCheckboxGroup('Size', ['Small', 'Medium', 'Large', 'Extra Large'])}
      </div>

      <div className="custom-price items-center flex justify-between mt-[25px]">
        <h5 className='uppercase text-card-bg text-[13px]'>custom price</h5>
        <span className='text-sm font-medium bg-[#111827] text-white py-[5px] px-[15px]'>${calculateTotalPrice().toFixed(2)}</span>
      </div>

      <button 
        className='uppercase w-full bg-[#111827] text-white p-[6px] mt-[25px] text-[13px]'
        onClick={() => alert(`Total Price: $${calculateTotalPrice().toFixed(2)}`)}
      >
        continue enquiries
      </button>
    </div>
  )
}

export default Sidebar;
