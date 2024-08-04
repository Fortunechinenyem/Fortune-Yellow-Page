import React from "react";
import Link from "next/link";

const CTA = () => (
  <section className="">
    <div className="text-center">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Join Us Today
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Get your business listed in our directory and start connecting with
        other businesses and customers in the community.
      </p>
    </div>
    <button type="submit" className="button mx-auto">
      <Link href="/create">Add Your Business</Link>
    </button>
  </section>
);

export default CTA;
