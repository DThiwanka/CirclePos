import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from './learning-animate.svg';
import { FaCloud, FaCode, FaShieldAlt } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <h2 className="text-lg font-bold text-black">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

function HeroSection4() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <div>
        <center>
        <h1 className="text-2xl font-bold mb-6" data-aos="fade-up">
          A Closer Look at Technical Functionality
        </h1>
        </center>
    
    <div className="flex flex-col md:flex-row items-center justify-center p-6 max-w-6xl mx-auto">
        
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={HeroImage}
          alt="Illustration"
          className="w-3/4 md:w-full"
          data-aos="fade-right"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        
        <div className="space-y-6">
          <FeatureCard
            icon={<FaCloud className="text-purple-700 h-6 w-6" />}
            title="Cloud-Based System"
            description="Our Cloud-Based System Ensures Seamless Access To Your Data From Anywhere With An Internet Connection. Experience Real-Time Synchronization Across Devices And Locations."
          />
          <FeatureCard
            icon={<FaCode className="text-purple-700 h-6 w-6" />}
            title="Development Frameworks"
            description="Utilizing Modern Development Frameworks, Our Platform Ensures Scalability, Performance, And Maintainability. It Leverages Technologies Such As ReactJs, Java And Python."
          />
          <FeatureCard
            icon={<FaShieldAlt className="text-purple-700 h-6 w-6" />}
            title="Security Measures"
            description="Our Platform Prioritizes Security With Robust Measures To Protect Your Data And Transactions. With Data Encryption, Secure Transmission Protocols, And Role-Based Access Control."
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default HeroSection4;
