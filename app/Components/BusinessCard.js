import React from "react";
import Link from "next/link";

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <img
          src={business.logo}
          alt={business.name}
          className="w-12 h-12 rounded-full"
        />
        <h2 className="ml-4 text-xl font-bold">{business.name}</h2>
      </div>
      <p className="text-gray-700">{business.description}</p>
      <Link
        href={`/businesses/${business.id}`}
        className="text-blue-500 mt-2 inline-block"
      >
        More Details
      </Link>
    </div>
  );
};

export default BusinessCard;
