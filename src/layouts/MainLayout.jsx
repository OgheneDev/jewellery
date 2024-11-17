import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MainLayout = ({toggleChat}) => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Run this effect whenever the route changes


  return (
    <>
      <Navbar toggleChat={toggleChat} />
      <Outlet  />
      <Footer toggleChat={toggleChat} />
    </>
  )
}

export default MainLayout
