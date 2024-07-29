import React from 'react'
import HeroSection1 from './HeroSection1/HeroSection1'
import HeroSection2 from './HeroSection2/HeroSection2'
import Navbar from './Navbar/Navbar'

function LandingPage() {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <HeroSection1/>
      <HeroSection2/>
    </div>
  )
}

export default LandingPage
