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
    <div className=" flex flex-col">
      <div className="bg-gray-100 flex flex-grow items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 md:flex gap-16 items-center">

          {/* Left Side */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Make Every Moment Count With <span style={{ color: '#480489' }}>CirclePOS</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Ready To Experience The Difference? <br />
                Take The First Step Towards Success By Exploring CirclePOS Today.
              </p>
              <div className="mt-4">
                <button className="text-white font-bold py-3 px-6 rounded-md mr-2" style={{ backgroundColor: "#480489" }}>
                  Enroll Now
                </button>
                <button className="bg-white border-2 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md" style={{ border: '1', borderColor: "#480489" }}>
                  Talk with Us
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src={HeroImage}
              alt="CircleLearn Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <center>
        <hr className="w-3/4 mt-4 border-t border-[#4904891a] bg-[#49048946]" />
      </center>
    </div>
  );
}

export default HeroSection1;
