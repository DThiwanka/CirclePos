import React from 'react';
import 'aos/dist/aos.css';

const GetInTouch = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-center p-6 max-w-6xl mx-auto">
        {/* Left Side */}
        <div
          className="w-full md:w-1/2 p-8 rounded-lg"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4">Need any Help?</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="phone">
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-600">
                  +94
                </span>
                <input
                  type="text"
                  id="phone"
                  placeholder="1234567890"
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
              />
            </div>
            <button
              className="text-white font-bold py-3 px-6 rounded-md mt-4"
              style={{ backgroundColor: "#480489" }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div
          className="w-full md:w-1/2 bg-gray-100 text-black p-8 rounded-lg md:ml-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4">Get in Touch With Us</h2>
          <div className="space-y-4">
            <div className='flex items-center'>
              <h3 className="text-xl font-bold text-gray-700 w-1/2">Call Us Now</h3>
              <p className="text-gray-800 w-1/2 text-right">0123456789</p>
            </div>
            <div className='flex items-center'>
              <h3 className="text-xl font-bold text-gray-700 w-1/2">Email Us Now</h3>
              <p className="text-gray-800 w-1/2 text-right">name@email.com</p>
            </div>
            <div className='flex items-center'>
              <h3 className="text-xl font-bold text-gray-700 w-1/2">Office Address</h3>
              <p className="text-gray-800 w-1/2 text-right">No.123, Colombo</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center mt-8"
        data-aos="fade-up"
      >
        <hr className="w-3/4 border-t border-[#4904891a] bg-[#49048946] sm:w-5/6 md:w-3/4 lg:w-1/2" />
        <h1 className="text-2xl md:text-3xl font-bold mt-6 md:mt-8 text-center">
          Contact us today to schedule a personalized demo
        </h1>
        <button
          className="text-white font-bold py-3 px-6 rounded-md mt-6 mb-10"
          style={{ backgroundColor: "#480489" }}
        >
          Talk With Us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
