import React from 'react';
//import BackgroundImage from '../SvgComponents/promoImage.jpg'; // replace with the actual path to your image

function Promotion() {
  return (
    <div className="flex justify-center" data-aos="zoom-in">
    <div className="relative h-64 w-4/5">
      <img
        src='https://images.pexels.com/photos/5008246/pexels-photo-5008246.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt="Summer Learning Sale"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-950 via-purple-600 to-white opacity-75 rounded-2xl"></div>
      <div className="absolute inset-0 flex flex-col justify-center text-left text-white p-6 pl-10">
        <h2 className="text-4xl font-bold mb-2">Summer Learning Sale</h2>
        <p className="text-2xl mb-2">Up to 50% Off!</p>
        <p className="text-sm mb-2">Sign up and Save Big!</p>

        <button
          className="text-white font-bold py-3 px-6 rounded-md mr-4 mt-5 w-max hover:scale-105"
          style={{ backgroundColor: "white",color:'black' }}
        >
          Sign Up
        </button>

      </div>
    </div>
    </div>
  );
}

export default Promotion;