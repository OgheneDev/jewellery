import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-background text-text-color px-[35px] py-[20px]'>
       <div className="logo">
        <h3 className='font-bold text-2xl '>Burn and Co.</h3>
       </div>

       <div className="menu hidden">
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Make Enquirires</li>
        </ul>
       </div>
    </nav>
  )
}

export default Navbar
