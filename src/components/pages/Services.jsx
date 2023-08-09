
import React from 'react';
import clientImage from './gotbackup.png';
import partnerImage from './gotbackup.png';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold p-10 text-center text-gray-900">Our Services</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {/* First Row */}
        <div className="row-span-1 col-span-1">
        <div className="text-4xl font-bold  py-3">Clients</div>
          <img src={clientImage} alt="Client" className="h-200 w-200" />
          <div className="row-span-1 col-span-2 mt-5">
          <p>Protect all your data. Access your files anytime from anywhere in the world. Fast, Secure and Easy to use.
Despite being a brand new and revolutionary product, Gotbackup is developed and owned by a multi million-dollar Internet Marketing and software development company called GVO (Global Virtual Opportunities). 
GVO has owned and operated their own Datacenter in Schertz Texas since 2007</p>
          </div>
        </div>
        <div className="row-span-1 col-span-1">
        <div className="font-bold text-4xl py-3">Partners</div>
          <img src={partnerImage} alt="Partner" className="h-200 w-200" />
          <div className="row-span-1 col-span-2 mt-5">
          <p>Description for Partners Images</p>
          </div>
        </div>

        {/* Second Row */}
        
      </div>

      {/* Features and Benefits Section */}
      <div className="my-8">
        {/* Add your features and benefits content here */}
      </div>
    </div>
  );
};

export default Services;


