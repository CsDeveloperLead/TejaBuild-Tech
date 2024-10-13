import React from 'react';
import { Home, Building, Calendar } from 'lucide-react';

const OwnerCard = ({ owner }) => (
  <div className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-1/3 bg-gray-300 rounded-lg h-64 md:h-auto"></div>
    <div className="w-full md:w-2/3 flex flex-col justify-between py-2">
      <div>
        <h3 className="text-2xl font-bold mb-2">{owner.name}</h3>
        <p className="text-gray-600 mb-4">{owner.email}</p>
        <div className="space-y-2">
          <p className="flex items-center"><Home size={16} className="mr-2" /> {owner.houses} House</p>
          <p className="flex items-center"><Building size={16} className="mr-2" /> {owner.apartments} Apartment</p>
          <p className="flex items-center"><Building size={16} className="mr-2" /> {owner.flats} Flats</p>
        </div>
      </div>
      <button className="bg-orange-500 text-white px-6 py-3 sm:py-[10px] sm:px-4 sm:rounded-md rounded-full mt-3 sm:w-52 flex items-center justify-center max-sm:w-full ">
        <Calendar size={20} className="mr-2" /> Make Appointment
      </button>
    </div>
  </div>
);

const Bestprop = () => {
  // Dummy data representing property owners
  const owners = [
    {
      name: 'Abdul Salam',
      email: 'hossaininvain@gmail.com',
      houses: 12,
      apartments: 4,
      flats: 7,
    },
    {
      name: 'Abdul Salam',
      email: 'jassicaowner@gmail.com',
      houses: 16,
      apartments: 8,
      flats: 10,
    },
    {
      name: 'Abdul Salam',
      email: 'hossaininvain@gmail.com',
      houses: 80,
      apartments: 14,
      flats: 16,
    },
    {
      name: 'Abdul Salam',
      email: 'jassicaowner@gmail.com',
      houses: 24,
      apartments: 8,
      flats: 20,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Best Property Owner</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {owners.map((owner, index) => (
          <OwnerCard key={index} owner={owner} />
        ))}
      </div>
    </div>
  );
};

export default Bestprop;