import React from "react";
import { useRouter } from "next/router";

import BusinessProfile from "@/app/Components/BusinessProfile";
import Layout from "@/app/Components/Layout";

// Example data
const businesses = [
  {
    id: 1,
    name: "Sample Business",
    logo: "/images/sample-logo.png",
    category: "Restaurant",
    description:
      "A sample business offering services in the restaurant industry.",
    contact: {
      phone: "123-456-7890",
      email: "info@samplebusiness.com",
      address: "123 Sample Street, City, Country",
      website: "https://www.samplebusiness.com",
    },
  },
  // Add more businesses here
];

const BusinessDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const business = businesses.find((b) => b.id === parseInt(id, 10));

  return (
    <Layout>
      {business ? (
        <BusinessProfile business={business} />
      ) : (
        <p>Business not found</p>
      )}
    </Layout>
  );
};

export default BusinessDetails;
