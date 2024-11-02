import React from 'react'
import Sidebar from '../components/Sidebar'
import ProductList from '../components/ProductList'
import Ready from '../components/Ready'

const CustomizePage = () => {
  return (
    <div className='pt-[100px] pb-[40px] md:px-[80px]'>
      <Ready />
      <div className="md:flex md:gap-[10px] md:items-start ">
      <Sidebar />
      <ProductList />
      </div>
    </div>
  )
}

export default CustomizePage
