import React from 'react'

const OrderedListPartners = () => {
    const products = [
        { title: "Lucrative Earnings: Partnering with GotBackup opens the door to substantial earning potential. As a reseller, you'll have the opportunity to earn attractive commissions and bonuses for each successful referral and sale.", id: 1 },
        { title: "Trusted Brand: GotBackup is a reputable and trusted name in data security and backup solutions. Aligning your business with our established brand enhances your credibility and provides a competitive advantage.", id: 2 },
        { title: "Turnkey Solutions: Our reselling program offers turnkey solutions that are ready for you to promote and sell. You'll have access to a range of cutting-edge data backup products that address the pressing needs of businesses across industries.", id: 3 },
        { title: "Training and Support: We're invested in your success. Receive comprehensive training and ongoing support to ensure you're equipped to effectively communicate the value of our services and close deals confidently.", id: 4 },
        { title: "Trusted by Professionals: Trusted by businesses of all sizes, GotBackup is the go-to partner for data backup. Our industry expertise and satisfied clients stand as a testament to our commitment to data security.", id: 5 },
        { title: "Dedicated Support: Our team of experts is here to assist you every step of the way. Whether you're implementing our solutions or need support during a recovery process, we provide dedicated assistance to ensure your success.", id: 6 },
      ];

      const listItems = products.map(product =>
        <li key={product.id}>
          {product.title}
        </li>
      );
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default OrderedListPartners
