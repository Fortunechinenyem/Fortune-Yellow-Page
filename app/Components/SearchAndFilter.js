import React from "react";

const SearchAndFilter = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by business name or service"
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <select className="p-2 border rounded-md">
          <option>Category</option>
          <option>Restaurant</option>
          <option>Retail</option>
          <option>Services</option>
        </select>
        <select className="p-2 border rounded-md">
          <option>Location</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Port Harcourt</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
