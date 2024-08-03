import React from "react";
import Link from "next/link";

const Categories = () => (
  <section>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">
      Browse by Category
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <Link
        href="/categories/category-id"
        className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
      >
        <span className="text-lg font-semibold text-gray-800">Category</span>
      </Link>
    </div>
  </section>
);

export default Categories;
