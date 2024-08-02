import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-white shadow mt-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <p>© 2024 Fortune. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-blue-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-gray-600 hover:text-blue-500"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
