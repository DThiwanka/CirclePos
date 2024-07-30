import React from 'react'
import HeroSection1 from './HeroSection1/HeroSection1'
import HeroSection2 from './HeroSection2/HeroSection2'
import Navbar from './Navbar/Navbar'
import HeroSection3 from './HeroSection3/HeroSection3'
import HeroSection4 from './HeroSection4/HeroSection4'
import Comments from './CommentSection/Comments'
import Promotion from './PromotionCard/Promotion'
import GetInTouch from './GetInTouch/GetInTouch'
import Footer from './Footer/Footer'

function LandingPage() {
  return (
    <div className='bg-gray-100 overflow-hidden'>
      <Navbar/>
      <HeroSection1/>
      <HeroSection2/>
      <HeroSection3/>
      <HeroSection4/>
      <Promotion/>
      <Comments/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default LandingPage
