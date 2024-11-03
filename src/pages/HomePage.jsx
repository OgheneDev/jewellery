import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Popular from '../components/Popular'
import Brands from '../components/Brands'

const HomePage = ({ toggleChat }) => {
  return (
    <>
      <Hero />
      <Highlights />
      <Popular toggleChat={toggleChat} />
      <Brands />
    </>
  )
}

export default HomePage
