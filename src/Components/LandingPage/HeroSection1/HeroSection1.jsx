import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from './learning-animate.svg';

function HeroSection1() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className="bg-gray-100 py-6 md:flex md:justify-center md:items-center">
        <div className="max-w-screen-xl mx-auto px-4 md:flex md:space-x-8">

          {/* Left Side */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-10">
                Make Every Moment Count With <span style={{ color: '#480489' }}>CirclePOS</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Ready To Experience The Difference? <br />
                Take The First Step Towards Success By Exploring CirclePOS Today.
              </p>
              <div className="mt-6">
                <button className="text-white font-bold py-3 px-6 rounded-md mr-4" style={{ backgroundColor: "#480489" }}>
                  Enroll Now
                </button>
                <button className="bg-white border-2 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md" style={{ border: '1', borderColor: "#480489" }}>
                  Talk with Us
                </button>
              </div>
            </div>

          </div>



          {/* Right Side */}
          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            <img
              src={HeroImage}
              alt="CircleLearn Image"
              className="mx-auto md:mx-0"
              style={{ maxWidth: '90%', height: 'auto' }} // Adjust max-width or remove it
            />

          </div>

        </div>

      </div>

      <center>
        <hr className='w-3/4 border border-[#4904891a] bg-[#49048946]' />
      </center>

    </div>
  );
}

export default HeroSection1;