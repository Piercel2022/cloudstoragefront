import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './components/Team';
import Services from './components/Services';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import HeroSection from './components/HeroSection';
import LargeDescription from './components/LargeDescription';
import Navbar from './components/Navbar';

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
        <Route path="/testimonials" component={<Testimonials />} />
        {/* Add more routes for other pages if needed */}
      </Routes>


      <HeroSection />
      <LargeDescription />
      <Testimonials />
      </BrowserRouter>
    </div>
  );
}

export default App;