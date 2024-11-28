import React, { useState, useEffect } from 'react';
import Services from './Services';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Home Section with Background Image */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
        style={{
          backgroundImage: 'url(https://www.lekki-houses.com/wp-content/uploads/2021/09/Florence-Apartments-Lekki-Phase-1-12.jpg)', // Replace with actual image URL
        }}
      >
        {/* Welcome Section */}
        <div className="text-center py-16 px-4 max-w-4xl mx-auto bg-opacity-60 bg-black">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">RENTWITEASE NG</h1>
          <p className="text-lg mb-6">Find your dream property in the best locations.</p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="/services"
              className="bg-blue-700 text-white py-3 px-6 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </a>
            <a
              href="/book-inspection"
              className="bg-green-700 text-white py-3 px-6 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Inspection
            </a>
          </div>
        </div>
      </section>

      {/* Popup for booking inspection */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-300 p-8 rounded-lg shadow-lg text-center text-white max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Schedule a Property Inspection</h2>
            {/* Ensure the text is inside the popup */}
            <p className="mb-6 text-lg">
              Are you ready to book an inspection for your dream property?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/book-inspection"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Yes, Book Now
              </a>
              <button
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Services/>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-blue-500 text-white text-bold text-md">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-8">
            RENTWITEASE NG is committed to helping you find your perfect property. We provide a wide range of rental and purchase options in the best locations to meet your needs.
          </p>
          <p className="text-lg mb-8">
            Our mission is to make property renting and buying seamless, ensuring that every client has an enjoyable experience from start to finish.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 bg-gray-100"
        style={{
          perspective: '1000px',
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div
              className="bg-blue-300 text-white p-6 shadow-lg rounded-lg w-80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:rotate-2"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src="https://via.placeholder.com/60"
                alt="Client 1"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4">
                "RENTWITEASE NG helped me find the perfect rental property in a great location. The process was smooth and stress-free!"
              </p>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-600">Renter</p>
            </div>
            <div
              className="bg-blue-300 text-white p-6 shadow-lg rounded-lg w-80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:rotate-2"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src="https://via.placeholder.com/60"
                alt="Client 2"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4">
                "I bought my dream home through RENTWITEASE NG. The team was very professional and guided me every step of the way!"
              </p>
              <p className="font-semibold">John Smith</p>
              <p className="text-sm text-gray-600">Buyer</p>
            </div>
            <div
              className="bg-blue-300 text-white p-6 shadow-lg rounded-lg w-80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:rotate-2"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'all 0.3s ease',
              }}
            >
              <img
                src="https://via.placeholder.com/60"
                alt="Client 3"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4">
                "The service was fantastic. They truly care about helping people find the right place to live."
              </p>
              <p className="font-semibold">Emily Johnson</p>
              <p className="text-sm text-gray-600">Renter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
