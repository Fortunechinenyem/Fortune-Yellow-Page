import React from "react";
import BusinessCard from "./BusinessCard";

const BusinessList = ({ businesses }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Businesses</h1>
      <p className="mb-8 text-gray-600">
        Browse through the complete list of businesses and services in our
        community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
