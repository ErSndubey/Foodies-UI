import React from 'react';

const Offers = () => {
  // Sample data for offers
  const offers = [
    {
      id: 1,
      title: '20% Off Your First Order',
      description: 'Get 20% off on your first food order!',
      code: 'FIRSTORDER20',
    },
    {
      id: 2,
      title: 'Free Delivery',
      description: 'Enjoy free delivery on all orders above $50.',
      code: 'FREESHIP',
    },
    // Add more offers as needed
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {offers.map((offer) => (
          <div key={offer.id} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-green-600 mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <p className="text-gray-800 font-bold">Code: {offer.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
