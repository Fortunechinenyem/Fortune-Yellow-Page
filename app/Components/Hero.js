import React from "react";
import Link from "next/link";

const Hero = () => (
  <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-800 text-white py-20 lg:py-32">
    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Elevate Your Business Visibility
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto drop-shadow-lg">
        Join Fortune Business Directory to connect, network, and thrive in our
        vibrant community. Showcase your business and grow with us!
      </p>
      <div className="mt-8">
        <Link
          href="/businesses"
          className="inline-block bg-white text-yellow-800 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
