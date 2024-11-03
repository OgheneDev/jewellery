import React from 'react'
import AboutHero from '../components/AboutHero'
import About from '../components/About'
import Values from '../components/Values'
import Popular from '../components/Popular'
import BrandHeader from '../components/BrandHeader'
import Process from '../components/Process'
import Overview from '../components/Overview'
import PremiumBanner from '../components/PremiumBanner'

const AboutUsPage = ({ toggleChat }) => {
  return (
    <>
      <AboutHero />
      <About />
      <Values />
      <Popular toggleChat={toggleChat} />
      <BrandHeader />
      <Process />
      <Overview />
      <PremiumBanner />
    </>
  )
}

export default AboutUsPage
