import React from 'react';

const LargeDescription = () => {
  const descriptionText = `Don't risk losing your valuable data. Protect it with our advanced backup and recovery solutions. 
  Get peace of mind knowing your data is safe with us. 
  At GotBackup, we understand the critical importance of safeguarding your valuable data. 
  Whether you are an individual, a small business, or a large enterprise, data loss can be catastrophic. 
  That's why we offer comprehensive backup and recovery solutions that ensure your data is protected and easily restorable when needed.

 Sign up for a free trial and experience the peace of mind that comes with knowing your data is protected by the industry's most reliable backup and recovery solution. 
 GotBackup - Your data, our priority.`;

  return (
    <div className="px-4 mt-5 py-8 mx-auto border-4 border-blue-500/100   ">
      <p className="text-xl text-center text-gray-900">{descriptionText}</p>
    </div>
  );
};

export default LargeDescription;
