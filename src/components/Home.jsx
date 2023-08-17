import React from 'react'
import HeroSection from './HeroSection';
import LargeDescription from './LargeDescription';
import KeyFeatures from './KeyFeatures';
import Testimonials from './pages/Testimonials';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LargeDescription />
      <KeyFeatures />
      <Testimonials />
    </div>
  )
}

export default Home
