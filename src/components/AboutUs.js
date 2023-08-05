import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [aboutUsContent, setAboutUsContent] = useState('');

  useEffect(() => {
    axios.get('your_backend_api_url/about-us')
      .then((response) => {
        setAboutUsContent(response.data.content);
      })
      .catch((error) => {
        console.error('Error fetching About Us content:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <p className="text-xl text-center text-gray-800">{aboutUsContent}</p>
    </div>
  );
};

export default AboutUs;
