"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/Images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  className=""
                  src={Logo}
                  alt="logo"
                  width={110}
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-4 md:ml-6">
              <Link
                href="/businesses"
                className="text-gray-800 hover:text-blue-500"
              >
                Businesses
              </Link>
              <Link
                href="/create"
                className="text-gray-800 hover:text-blue-500"
              >
                Add Business
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-blue-500">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-500"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? "hidden" : "block"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${isOpen ? "block" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/businesses"
            className="text-gray-800 block hover:bg-gray-200 p-2 rounded"
          >
            Businesses
          </Link>
          <Link
            href="/create"
            className="text-gray-800 block hover:bg-gray-200 p-2 rounded"
          >
            Add Business
          </Link>
          <Link
            href="/about"
            className="text-gray-800 block hover:bg-gray-200 p-2 rounded"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 block hover:bg-gray-200 p-2 rounded"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
