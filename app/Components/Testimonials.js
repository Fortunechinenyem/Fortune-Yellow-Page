import React from "react";

const Testimonials = () => (
  <section>
    <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 italic">
          "This platform has greatly increased our business's visibility. We
          love being a part of the community!"
        </p>
        <p className="mt-4 text-right text-gray-800 font-semibold">
          - John Doe, Business Owner
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
