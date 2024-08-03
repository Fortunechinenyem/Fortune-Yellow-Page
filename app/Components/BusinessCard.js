import React from "react";
import Link from "next/link";
import Image from "next/image";

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <Image
          src={business.logo}
          alt={business.name}
          className="w-12 h-12 rounded-full"
        />
        <h2 className="mx-auto text-xl font-bold">{business.name}</h2>
      </div>
      <p className="text-center text-gray-700 mb-5">{business.description}</p>
      <Link href={`/businesses/${business.id}`} className="mx-auto button">
        More Details
      </Link>
    </div>
  );
};

export default BusinessCard;
