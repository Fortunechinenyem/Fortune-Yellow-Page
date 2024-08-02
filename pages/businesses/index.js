import React from "react";

import BusinessList from "@/app/Components/BusinessList";
import Layout from "@/app/Components/Layout";

const businesses = [
  {
    id: 1,
    name: "Sample Business",
    logo: "/images/sample-logo.png",
    category: "Restaurant",
    description:
      "A sample business offering services in the restaurant industry.",
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
