import React, { useEffect } from 'react';

const RentPage = () => {
  const locations = [
    { name: 'Yaba axis', price: '₦10,000,000', type: '1-Bedroom Miniflat' },
    { name: 'Anthony/Maryland', price: '₦20,000,000', type: '2-Bedroom Miniflat' },
    { name: 'Ifako-Gbagada', price: '₦30,000,000', type: '3-Bedroom Miniflat' },
    { name: 'Ogudu/Alapere', price: '₦8,000,000', type: '1-Room Self Contained' },
    { name: 'Surulere', price: '₦15,000,000', type: 'Studio' },
  ];

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="rent" className="p-8 bg-white py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Available Properties for Rent</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded shadow">
            <h3 className="font-semibold">{location.name}</h3>
            <p>{location.type}</p>
            <p className="text-blue-500">{location.price} / month</p>
            <button className="bg-blue-500 text-white p-2 w-full mt-4">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentPage;
