import React from 'react'
import Sidebar from '../components/Sidebar'
import ProductList from '../components/ProductList'

const CustomizePage = () => {
  return (
    <div className='pt-[100px] pb-[40px]'>
      <div className="md:flex md:gap-[10px] md:px-[80px]">
      <Sidebar />
      <ProductList />
      </div>
    </div>
  )
}

export default CustomizePage
