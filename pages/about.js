import React from "react";
import Layout from "@/app/Components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              About Fortune Business Directory
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
              Welcome to Fortune, your go-to platform for discovering and
              connecting with businesses in our community. Our mission is to
              make it easy for you to find the services and products you need,
              while also supporting local businesses.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4">
                <div className="h-full p-6 bg-gray-50 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-gray-600">
                    At Fortune, we envision a thriving community where
                    businesses can grow and prosper, offering the best services
                    and products to their customers. We aim to be the bridge
                    that connects consumers with local businesses.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mt-6 md:mt-0">
                <div className="h-full p-6 bg-gray-50 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Our mission is to provide a comprehensive and user-friendly
                    platform that showcases the best of what our community has
                    to offer. We are committed to supporting local businesses
                    and helping them reach a broader audience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mt-6 md:mt-0">
                <div className="h-full p-6 bg-gray-50 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Our Values
                  </h3>
                  <p className="mt-4 text-gray-600">
                    We believe in integrity, transparency, and community
                    support. These values guide us in everything we do, ensuring
                    that we provide a trustworthy platform for both businesses
                    and consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Meet Our Team
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
                Our dedicated team is passionate about making a difference in
                the community. Get to know the people behind Fortune.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center -mx-4">
              {/* Team Member 1 */}
              <div className="w-full md:w-1/4 px-4">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img
                      className="rounded-full"
                      src="https://via.placeholder.com/128"
                      alt="Team Member"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    John Doe
                  </h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="w-full md:w-1/4 px-4 mt-6 md:mt-0">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img
                      className="rounded-full"
                      src="https://via.placeholder.com/128"
                      alt="Team Member"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">Chief Marketing Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
