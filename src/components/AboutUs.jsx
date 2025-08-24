const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Wanderlast</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          At Wanderlast, we believe travel should be simple, affordable, and unforgettable. 
          Our mission is to connect explorers with the world’s most breathtaking experiences, 
          while providing convenience and value every step of the way.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-3">🌍 Global Reach</h3>
            <p className="text-gray-600">
              Explore destinations across continents, from hidden gems to world-famous landmarks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-3">💸 Best Prices</h3>
            <p className="text-gray-600">
              Exclusive deals and affordable packages to suit every type of traveler.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-3">⭐ Trusted Service</h3>
            <p className="text-gray-600">
              Thousands of happy travelers trust Wanderlast for seamless journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
