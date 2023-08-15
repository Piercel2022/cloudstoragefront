import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Team from './components/pages/Team';
import Services from './components/pages/Services';
import Layout from './components/Layout';
import Contact from './components/pages/Contact';
import Testimonials from './components/pages/Testimonials';
const App = () => {
  return (
    <>
      <Router>

      {/* Your website content goes here */}
       <Routes>
       <Route path="/" element={<Layout />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
      </Router>

    </>
  );
}

export default App;