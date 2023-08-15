import React from 'react'

const OrderedListPartners = () => {
    const products = [
        { title: "Lucrative Earnings: Partnering with GotBackup opens the door to substantial earning potential. As a reseller, you'll have the opportunity to earn attractive commissions and bonuses for each successful referral and sale.", id: 1 },
        { title: "Trusted Brand: GotBackup is a reputable and trusted name in data security and backup solutions. Aligning your business with our established brand enhances your credibility and provides a competitive advantage.", id: 2 },
        { title: "Turnkey Solutions: Our reselling program offers turnkey solutions that are ready for you to promote and sell. You'll have access to a range of cutting-edge data backup products that address the pressing needs of businesses across industries.", id: 3 },
        { title: "Training and Support: We're invested in your success. Receive comprehensive training and ongoing support to ensure you're equipped to effectively communicate the value of our services and close deals confidently.", id: 4 },
        { title: "Flexible Approach: Tailor your reselling approach to your strengths and network. Whether you're an individual entrepreneur, a small business owner, or a seasoned sales professional, our program adapts to your unique style.", id: 5 },
        { title: "Networking Opportunities: Join a community of like-minded business partners who are driven to succeed. Connect, collaborate, and share insights with other resellers to expand your knowledge and business reach.", id: 6 },
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
