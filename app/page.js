import Hero from "./Components/Hero";
import Layout from "./Components/Layout";
import SearchAndFilter from "./Components/SearchAndFilter";

import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Newsletter from "./Components/Newsletter";
import FeaturedBusinesses from "./Components/FeaturedBusiness";
import About from "./Components/About";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mt-8">
        <SearchAndFilter />
      </div>
      <div className="mt-16 bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedBusinesses />
        </div>
      </div>
      <div className="mt-16  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </div>
      <div className="mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
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
