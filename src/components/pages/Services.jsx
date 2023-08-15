
import React from 'react';
import clientImage from './gotbackup.png';
import partnerImage from './gotbackup.png';

const Services = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="p-10 text-5xl font-bold text-center text-gray-900">Our Services</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {/* First Row */}
        <div className="col-span-1 row-span-1">
        <div className="py-3 text-4xl font-bold">Clients</div>
          <img src={clientImage} alt="Client" className="h-200 w-200" />
          <div className="col-span-2 row-span-1 mt-5 ">
          <p>Protect all your data. Access your files anytime from anywhere in the world. 
            Fast, Secure and Easy to use.Despite being a brand new and revolutionary product, 
            Gotbackup is developed and owned by a multi million-dollar Internet Marketing and software development company called GVO (Global Virtual Opportunities). 
            GVO has owned and operated their own Datacenter in Schertz Texas since 2007</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
        <div className="py-3 text-4xl font-bold">Partners</div>
          <img src={partnerImage} alt="Partner" className="h-200 w-200" />
          <div className="col-span-2 row-span-1 mt-5">
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


