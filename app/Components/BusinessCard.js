import React from "react";
import Link from "next/link";
import Image from "next/image";

const BusinessCard = ({ business }) => {
  if (!business) {
    return null;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-2">{business.name}</h2>
      <Image
        src={business.logo}
        alt={`${business.name} logo`}
        width={150}
        height={150}
      />
      <p className="mt-2">{business.description}</p>
      <Link href={`/businesses/${business.id}`} className="mx-auto button mt-4">
        More Details
      </Link>
    </div>
  );
};

export default BusinessCard;
