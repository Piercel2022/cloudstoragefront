import React from 'react'




const OrderedListClient = () => {
    const products = [
        { title: 'Data Protection Expertise: At GotBackup, we specialize in safeguarding your valuable data. Our cutting-edge backup solutions offer robust protection against data loss, ensuring your critical information is secure at all times.', id: 1 },
        { title: "Peace of Mind: With our comprehensive backup services, you can rest easy knowing that your business's vital data is shielded from unforeseen disasters, hardware failures, or cybersecurity threats.", id: 2 },
        { title: "Seamless Recovery: In the event of data loss, our seamless recovery process ensures that you can quickly restore your information, minimizing downtime and preventing potential business disruptions.", id: 3 },
        { title: "Tailored Solutions: We understand that every business's data needs are unique. Our solutions are customizable to fit your specific requirements, ensuring optimal protection without unnecessary complexities.", id: 4 },
        { title: "Trusted by Professionals: Trusted by businesses of all sizes, GotBackup is the go-to partner for data backup. Our industry expertise and satisfied clients stand as a testament to our commitment to data security.", id: 5 },
        { title: "Dedicated Support: Our team of experts is here to assist you every step of the way. Whether you're implementing our solutions or need support during a recovery process, we provide dedicated assistance to ensure your success.", id: 6 },
      ];

      const listItems = products.map(product =>
        <li key={product.id}>
          {product.title}
        </li>
      );
      
      return (
        <ol className="">{listItems}</ol>
      );
}

export default OrderedListClient
