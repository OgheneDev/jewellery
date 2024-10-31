import React, {useState, useEffect} from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import menu from '../assets/images/menu.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className='flex justify-between items-start bg-background text-text-color px-[35px] py-[20px]'>
       <div className="logo">
        <h3 className='font-bold text-2xl '>Burn and Co.</h3>
       </div>

       <div className={`md:hidden menu fixed w-full top-[70px] ${isOpen ? 'translate-x-0' : '-translate-x-full'} left-0 transition-transform duration-200 ease-in-out h-screen bg-white py-[30px]`}>
        <ul className='flex flex-col items-center gap-[30px] text-text-color text-[18px]'>
            <li><NavLink to='/about-us'>About Us</NavLink></li>
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            <li><NavLink to='/make-enquiries'>Make Enquirires</NavLink></li>
        </ul>
       </div>

       <div className="desktop-menu hidden md:block">
        <ul className="flex text-custom-ash gap-[20px] items-center">
            <li><NavLink to='/about-us'>About Us</NavLink></li>
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            <li><NavLink to='/make-enquiries'>Make Enquirires</NavLink></li>
        </ul>
       </div>

       <div className="md:hidden menu-button">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="Menu" />
        </button>
      </div>

    </nav>
  )
}

export default Navbar
