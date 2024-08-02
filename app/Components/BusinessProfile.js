import React from "react";

const BusinessProfile = ({ business }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={business.logo}
          alt={business.name}
          className="w-16 h-16 rounded-full"
        />
        <h1 className="ml-4 text-2xl font-bold">{business.name}</h1>
      </div>
      <p className="text-gray-600 mb-4">{business.category}</p>
      <p className="text-gray-700 mb-4">{business.description}</p>
      <div>
        <h2 className="font-bold">Contact Information:</h2>
        <p>Phone: {business.contact.phone}</p>
        <p>Email: {business.contact.email}</p>
        <p>Address: {business.contact.address}</p>
        {business.contact.website && <p>Website: {business.contact.website}</p>}
      </div>
    </div>
  );
};

export default BusinessProfile;
