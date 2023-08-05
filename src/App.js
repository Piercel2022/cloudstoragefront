import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './components/Team';
import Services from './components/Services';
import Blog from './components/Blog';
import Slideshow from './components/Slideshow';
import HeroSection from './components/HeroSection';
import LargeDescription from './components/LargeDescription';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* Your website content goes here */}
      <Navbar />
       <Routes>
        <Route path="/services" component={<Services />} />
        <Route path="/team" component={<Team />} />
        <Route path="/blog" component={<Blog />} />
        <Route path="/Contact" component={<Contact />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
      </BrowserRouter>

      <HeroSection />
      <LargeDescription />
      <Slideshow />
     
    </div>
  );
}

export default App;