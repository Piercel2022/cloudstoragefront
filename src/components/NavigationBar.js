import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="py-4 bg-blue-500">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl font-bold text-white">
          <a href="/">GotBackup</a>
        </div>
        
        <div className="hidden space-x-4 md:flex">
          <a href="#home" className="px-4 py-2 text-white rounded hover:bg-blue-600">Home</a>
          <a href="#about" className="px-4 py-2 text-white rounded hover:bg-blue-600">About Us</a>
          <a href="#services" className="px-4 py-2 text-white rounded hover:bg-blue-600">Services</a>
          <a href="#blog" className="px-4 py-2 text-white rounded hover:bg-blue-600">Blog</a>
          <a href="#testimonials" className="px-4 py-2 text-white rounded hover:bg-blue-600">Testimonials</a>
          <a href="#contact" className="px-4 py-2 text-white rounded hover:bg-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
