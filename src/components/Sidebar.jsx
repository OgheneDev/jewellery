import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ toggleChat, sendMessageToAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [weight, setWeight] = useState(225.0);
  const [selections, setSelections] = useState({
    gender: '',
    material: '',
    category: '',
    size: ''
  });

  // Pricing data
  const PRICING = {
    gender: { Women: 500, Men: 600, Youth: 400 },
    material: {
      Gold: 2000, Diamond: 5000, Emerald: 3000, Ruby: 3500, Onyx: 2500,
      Chalcedony: 1500, Opal: 2200, Amethyst: 1800, Topaz: 1600
    },
    category: { Rings: 800, Bracelets: 1200, Necklace: 1500, Earrings: 600, 'Nose Rings': 450 },
    size: { Small: 300, Medium: 500, Large: 700, 'Extra Large': 900 }
  };

  const handleWeightChange = (event) => {
    setWeight(parseFloat(event.target.value));
  };

  const handleSelectionChange = (category, value) => {
    setSelections((prev) => ({
      ...prev,
      [category]: prev[category] === value ? '' : value
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 1000 + weight * 10;
    Object.entries(selections).forEach(([category, selectedItem]) => {
      if (selectedItem && PRICING[category][selectedItem]) {
        totalPrice += PRICING[category][selectedItem];
      }
    });
    return Math.min(totalPrice, 6000);
  };

  const handleEnquiriesClick = () => {
    const totalPrice = calculateTotalPrice();

    const message = `
      Order Details:
      - Measurements: ${weight.toFixed(1)}g
      - Gender: ${selections.gender || 'Not selected'}
      - Material: ${selections.material || 'Not selected'}
      - Category: ${selections.category || 'Not selected'}
      - Size: ${selections.size || 'Not selected'}
      - Total Price: $${totalPrice.toFixed(2)}
    `;

    // Send the message using sendMessageToAdmin
    sendMessageToAdmin(message);

    // Open the chat window
    toggleChat();
  };

  const renderCheckboxGroup = (category, items) => (
    <div className="category flex flex-col gap-[20px]">
      <h5 className="text-[13px] uppercase">{category}</h5>
      <div className="form-groups flex flex-col gap-[10px]">
        {items.map((item) => (
          <div key={item} className="form-group flex gap-[10px] items-center text-[13px]">
            <input
              type="radio"
              id={`${category}-${item}`.toLowerCase().replace(' ', '')}
              name={category.toLowerCase()}
              checked={selections[category.toLowerCase()] === item}
              onChange={() => handleSelectionChange(category.toLowerCase(), item)}
            />
            <label htmlFor={`${category}-${item}`.toLowerCase().replace(' ', '')}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Toggle Button */}
      <div className="px-[20px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#111827] text-white p-3 rounded-full shadow-lg md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <div
        className={`
          bg-background w-[250px] py-[40px] px-[20px] text-card-bg
          md:static md:translate-x-0 md:z-0 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed top-0 left-0 h-full z-[999]
          transform transition-transform duration-300 ease-in-out
        `}
      >
        <h5 className="uppercase text-[13px] mb-[30px]">Make custom jewelries</h5>

        {/* Weight Slider */}
        <div className="range-slider mb-[30px]">
          <div className="flex justify-between items-center">
            <span className="text-card-bg text-sm">Measurements</span>
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
          <div className="flex justify-between items-center">
            <span className="text-card-bg text-sm">Selected gram</span>
            <span className="text-sm font-medium">{weight.toFixed(1)} g</span>
          </div>
        </div>

        {/* Categories */}
        <div className="categories flex flex-col gap-[20px] md:overflow-visible overflow-y-auto md:max-h-none max-h-[calc(100vh-400px)]">
          {renderCheckboxGroup('Gender', ['Women', 'Men', 'Youth'])}
          {renderCheckboxGroup('Material', [
            'Gold', 'Diamond', 'Emerald', 'Ruby', 'Onyx', 'Chalcedony', 'Opal', 'Amethyst', 'Topaz'
          ])}
          {renderCheckboxGroup('Category', [
            'Rings', 'Bracelets', 'Necklace', 'Earrings', 'Nose Rings'
          ])}
          {renderCheckboxGroup('Size', ['Small', 'Medium', 'Large', 'Extra Large'])}
        </div>

        {/* Price Summary */}
        <div className="custom-price items-center flex justify-between mt-[25px]">
          <h5 className="uppercase text-card-bg text-[13px]">custom price</h5>
          <span className="text-sm font-medium bg-[#111827] text-white py-[5px] px-[15px]">
            ${calculateTotalPrice().toFixed(2)}
          </span>
        </div>

        {/* Continue Enquiries Button */}
        <button
          className="uppercase w-full bg-[#111827] text-white p-[6px] mt-[25px] text-[13px]"
          onClick={handleEnquiriesClick}
        >
          continue enquiries
        </button>
      </div>
    </>
  );
};

export default Sidebar;
