import React from "react";

import BusinessList from "@/app/Components/BusinessList";
import Layout from "@/app/Components/Layout";

const businesses = [
  {
    id: 1,
    name: "Chow Beta",
    logo: "/images/logo.JPG",
    logoWidth: 100, // Specify width
    logoHeight: 100, // Specify height
    category: "Restaurant",
    description: "A business offering services in the restaurant industry.",
    contact: {
      phone: "123-456-7890",
      email: "info@samplebusiness.com",
      address: "Band Z",
      website: "https://www.samplebusiness.com",
    },
  },
  {
    id: 2,
    name: "Kruss Automotive Services",
    logo: "/images/krusslogo.svg",
    logoWidth: 100,
    logoHeight: 100,
    category: "Services",
    description: "An auto services business",
    contact: {
      phone: "09025301696",
      email: "info@krussautoserv.ng",
      address: "lagos",
      website: "https://www.krussautoserv.ng/",
    },
  },
  {
    id: 3,
    name: "Iya-In-Tech Dev Services",
    logo: "/images/logo.JPG",
    logoWidth: 100,
    logoHeight: 100,
    category: "Services",
    description: "A business offering services in the tech industry.",
    contact: {
      phone: "08067585444",
      email: "info@samplebusiness.com",
      address: "lagos",
      website: "https://portfoliofortune.netlify.app/",
    },
  },
];

const Businesses = () => {
  return (
    <Layout>
      <BusinessList businesses={businesses} />
    </Layout>
  );
};

export default Businesses;
