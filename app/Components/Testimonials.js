import React from "react";

const Testimonials = ({ testimonials }) => (
  <section className="py-12">
    <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 italic">"{testimonial.quote}"</p>
          <p className="mt-4 text-right text-gray-800 font-semibold">
            - {testimonial.name}, {testimonial.role}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
