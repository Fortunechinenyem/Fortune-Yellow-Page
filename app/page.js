import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import SearchAndFilter from "./Components/SearchAndFilter";

import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Newsletter from "./Components/Newsletter";
import FeaturedBusinesses from "./Components/FeaturedBusiness";
import About from "./Components/About";

export default function Home() {
  const featuredBusinesses = [
    {
      id: 1,
      name: "Business One",
      description: "A brief description of Business One.",
    },
    {
      id: 2,
      name: "Business Two",
      description: "A brief description of Business Two.",
    },
    {
      id: 3,
      name: "Business Three",
      description: "A brief description of Business Three.",
    },
  ];
  const testimonials = [
    {
      quote:
        "This platform has greatly increased our business's visibility. We love being a part of the community!",
      name: "John Doe",
      role: "Business Owner",
    },
    {
      quote:
        "A fantastic resource for connecting with local businesses. Highly recommend!",
      name: "Jane Smith",
      role: "Customer",
    },
    {
      quote:
        "We've found great partnerships and opportunities through this platform.",
      name: "Samuel Green",
      role: "Entrepreneur",
    },
  ];

  return (
    <Layout>
      <Hero />
      <div className="mt-8">
        <SearchAndFilter />
      </div>
      <div className="mt-16 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedBusinesses featuredBusinesses={featuredBusinesses} />
        </div>
      </div>
      <div className="mt-16  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </div>
      <div className="mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
      <div className="mt-16 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </div>
      <div className="mt-16  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <Newsletter />
        </div>
      </div>
    </Layout>
  );
}
