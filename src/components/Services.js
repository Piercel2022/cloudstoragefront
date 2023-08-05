import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/services')
      .then((response) => {
        setServicesData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Services data:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Our Services</h2>
      <ul>
        {servicesData.map((service) => (
          <li key={service.id}>{service.name} - {service.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
