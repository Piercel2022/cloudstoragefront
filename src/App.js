import React from 'react';
import HeroSection from './components/HeroSection';
import Testimonial from './components/Testimonial';
import LargeDescription from './components/LargeDescription';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      {/* Your website content goes here */}
      <Nav />
      <HeroSection />
      <LargeDescription />
      <Testimonial />
      
    </div>
  );
}

export default App;