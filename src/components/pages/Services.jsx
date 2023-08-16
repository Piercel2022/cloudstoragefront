
import React from 'react';
import clientImage from './gotbackup.png';
import partnerImage from './gotbackup.png';
import OrderedListClient from '../OrderedListClient';
import OrderedListPartners from '../OrderedListPartners';

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
          <p>Ensure Your Data's Safety with GotBackup's Advanced Data Backup Solutions</p>
          
    <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Key Points:</h2>
    <OrderedListClient />
   <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Why Choose Us:</h2>
   <p>Choosing GotBackup means choosing peace of mind. Safeguard your business's future with our advanced data backup solutions, backed by expertise, customization, and unwavering support.</p>
   </div>

  </div>
        <div className="col-span-1 row-span-1">
        <div className="py-3 text-4xl font-bold">Partners</div>
          <img src={partnerImage} alt="Partner" className="h-200 w-200" />
          <div className="col-span-2 row-span-1 mt-5">
          <p>Unlock Profitable Opportunities with GotBackup's Reselling Partnership</p>
          <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Key Points:</h2>
          <OrderedListPartners />
          <h2 className="mt-5 mb-2 text-lg font-semibold text-gray-900 dark:text-white">Why Choose Us:</h2>
   <p>GotBackup's reselling partnership empowers you to tap into a lucrative revenue stream while leveraging our expertise and industry recognition. Take your business to new heights by offering essential data backup solutions backed by a trusted brand.</p>
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


