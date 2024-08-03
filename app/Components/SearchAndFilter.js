import React from "react";

const SearchAndFilter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by business name or service"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <select className="p-4 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          <option>Category</option>
          <option>Restaurant</option>
          <option>Retail</option>
          <option>Services</option>
        </select>
        <select className="p-4 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          <option>Location</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Port Harcourt</option>
        </select>
        <button className="button mx-auto">Search</button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>
          Use the search and filters to find businesses that meet your needs.
        </p>
      </div>
    </div>
  );
};

export default SearchAndFilter;
