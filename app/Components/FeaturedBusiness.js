import React from "react";
import Link from "next/link";

const FeaturedBusinesses = () => (
  <section>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Featured Businesses
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Example Business Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">Business Name</h3>
        <p className="text-gray-600">
          Brief description of the business and services offered.
        </p>
        <Link
          href="/businesses/business-id"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedBusinesses;
