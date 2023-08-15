import React from 'react'




const OrderedListClient = () => {
    const products = [
        { title: 'Data Protection Expertise: At GotBackup, we specialize in safeguarding your valuable data. Our cutting-edge backup solutions offer robust protection against data loss, ensuring your critical information is secure at all times.', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];

      const listItems = products.map(product =>
        <li key={product.id}>
          {product.title}
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
}

export default OrderedListClient
