import React from "react";
import Cards from "../components/cards";

const HomeCards = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Cards>
            <div className="text-blue-600 text-4xl mb-4">
              {/* Icon (use any icon library, like FontAwesome or Heroicons) */}
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">
              We create responsive and beautiful websites that are optimized for performance and SEO.
            </p>
          </Cards>

          {/* Card 2 */}
          <Cards>
          <div className="text-blue-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Our design team crafts user-friendly, visually engaging interfaces that deliver a great user experience.
            </p>
          </Cards>

          {/* Card 3 */}
          <Cards>
          <div className="text-blue-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-cogs"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p className="text-gray-600">
              We build powerful and scalable mobile applications tailored to your business needs.
            </p>
            </Cards>

          {/* Card 4 */}
          <Cards>
          <div className="text-blue-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
            <p className="text-gray-600">
              Our SEO experts help your website rank higher and attract more organic traffic.
            </p>
            </Cards>

          {/* Card 5 */}
          <Cards>
            <div className="text-blue-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-cloud"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">
              We provide cloud infrastructure and management to optimize your data storage and security.
            </p>
          </Cards>

          {/* Card 6 */}
          <Cards>
            <div className="text-blue-600 text-4xl mb-4">
              {/* Icon */}
              <i className="fas fa-headset"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Our team provides round-the-clock customer support to help you with any issues you face.
            </p>
          </Cards>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
