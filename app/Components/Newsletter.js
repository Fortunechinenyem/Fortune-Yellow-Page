"use client";
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic
  };

  return (
    <section className="text-center ">
      <h2 className="text-3xl font-bold  mb-6">Stay Updated</h2>
      <p className="text-lg mb-8">
        Subscribe to our newsletter to receive the latest updates and offers.
      </p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-1/2 px-4 py-2 rounded-l-md focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="button mx-auto">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
