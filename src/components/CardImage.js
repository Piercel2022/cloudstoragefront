import React from 'react'
import CardImage1 from '../images/gotbackup.png';

const CardImage = () => {
  return (
    <div className="px-8 py-24 text-white bg-blue-500 md:px-16">
    <div className="container ">
      <div className="flex flex-row items-center">
      <div className="md:w-25 md:pl-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Protect Your Data with GotBackup</h1>
          <p className="mb-8 text-lg">At GotBackup, we understand the critical importance of safeguarding your valuable data. Whether you are an individual, a small business, or a large enterprise, data loss can be catastrophic. 
          That's why we offer comprehensive backup and recovery solutions that ensure your data is protected and easily restorable when needed..</p>
         
        </div>
        <div className="mb-8 md:w-25 md:mb-0">
          <img src={CardImage1} alt="image1" className="rounded-lg shadow-lg " />
        </div>
    
      </div>
    </div>
  </div>
  )
}

export default CardImage
