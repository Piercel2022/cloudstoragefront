import React from 'react';
import heroImage from './gotbackup.png';

const HeroSection = () => {
  return (
    <div className="px-8 py-24 text-white bg-blue-500 md:px-16">
      <div className="container ">
        <div className="flex flex-row items-center lg:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img src={heroImage} alt="Hero" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Secure Your Data with GotBackup</h1>
            <p className="mb-8 text-lg">Don't risk losing your valuable data. Protect it with our advanced backup and recovery solutions. 
            Get peace of mind knowing your data is safe with us.</p>
            <div>
            <a href="https://cloudstorage.gotbackup.com" className="px-8 py-4 font-bold text-white bg-green-500 rounded-lg hover:bg-green-600">
            Get Started
            </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
