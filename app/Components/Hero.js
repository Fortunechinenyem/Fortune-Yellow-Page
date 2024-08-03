import React from "react";
import Link from "next/link";

const Hero = () => (
  <div className="relative bg-gradient-to-r from-[#f6e855] to-[#858327] text-white py-20 lg:py-32">
    <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Welcome to Fortune Business Directory
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl drop-shadow-lg">
        Are you a business owner? We invite you to add your business details to
        our Yellow Pages directory. By joining, you’ll benefit from increased
        visibility and the opportunity to network with other businesses. This
        platform is designed to foster connections, support local businesses,
        and create a thriving community.
      </p>
      <div className="mt-8">
        <Link
          href="/businesses"
          className="inline-block bg-white text-yellow-900 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Click Here to Proceed
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
