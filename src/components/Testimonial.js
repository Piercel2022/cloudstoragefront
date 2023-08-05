import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/api/testimonials')
      .then((response) => {
        setTestimonialsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Testimonials data:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">Testimonials</h2>
      <ul>
        {testimonialsData.map((testimonial) => (
          <li key={testimonial.id}>
            <p>{testimonial.message}</p>
            <div>
              <h4>{testimonial.name}</h4>
              <p>{testimonial.designation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
