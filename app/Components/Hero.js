import React from "react";
import Link from "next/link";

const Hero = () => (
  <div className="bg-[#858327] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Welcome to Fortune Business Directory
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Are you a business owner? We invite you to add your business details to
        our Yellow Pages directory. By joining, you’ll benefit from increased
        visibility and the opportunity to network with other businesses. This
        platform is designed to foster connections, support local businesses,
        and create a thriving community. Don’t miss out on this chance to grow
        your business and connect with like-minded individuals. Add your
        business today!
      </p>

      <div className="mt-8">
        <Link
          href="/businesses"
          className="bg-white text-gray-400 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Click Here to Proceed
        </Link>
      </div>
    </div>
  </div>
);

export default Hero;
