import React from 'react';
import imageUrl1 from './HeroImg1.svg'
import imageUrl2 from './HeroImg2.svg'
import imageUrl3 from './HeroImg3.svg'

function HeroSection2() {

  const title = 'dasdad';


  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black">
        <img className="w-10 h-10 object-cover mb-5" src={imageUrl1} alt={title} />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Need help with a Claim?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Follow this step-by-step guideline to certify your weekly benefits.
          </p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black">
        <img className="w-10 h-10 object-cover mb-5" src={imageUrl2} alt={title} />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Need help with a Claim?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Follow this step-by-step guideline to certify your weekly benefits.
          </p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black">
        <img className="w-10 h-10 object-cover mb-5" src={imageUrl3} alt={title} />
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
              Need help with a Claim?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Follow this step-by-step guideline to certify your weekly benefits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection2;
