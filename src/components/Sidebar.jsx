import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState(225.0);
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

  const handleWeightChange = (event) => {
    setWeight(parseFloat(event.target.value));
  };

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

  const calculateTotalPrice = () => {
    let totalPrice = 1000;
    totalPrice += weight * 10;
    
    Object.entries(selections).forEach(([category, selectedItems]) => {
      selectedItems.forEach(item => {
        if (PRICING[category][item]) {
          totalPrice += PRICING[category][item];
        }
      });
    });

    return Math.min(totalPrice, 6000);
  };

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
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" absolute top-[75px] left-4 z-50 bg-[#111827] text-white p-3 rounded-full shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div className={`
        fixed top-0 left-0 h-full z-50 
        bg-background w-[250px] py-[40px] px-[20px] text-card-bg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:transform-none md:block
      `}>
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

        <div className="categories flex flex-col gap-[20px] overflow-y-auto max-h-[calc(100vh-400px)]">
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
          onClick={() => {
            alert(`Total Price: $${calculateTotalPrice().toFixed(2)}`);
            setIsOpen(false);
          }}
        >
          continue enquiries
        </button>
      </div>
    </>
  );
};

export default Sidebar;
