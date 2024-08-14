import React from 'react';

const NotPaidPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-purple-200 to-purple-500 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white shadow-xl rounded-lg max-w-4xl w-full p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row transform transition duration-500 hover:scale-105"
        style={{ backgroundColor: '#49048946' }}
      >
        {/* Left Section: Icon */}
        <div className="flex items-center justify-center bg-purple-100 p-6 md:p-8 md:w-1/3 rounded-lg mb-6 md:mb-0">
          <svg
            className="w-20 h-20 sm:w-24 sm:h-24 text-purple-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
            ></path>
          </svg>
        </div>

        {/* Right Section: Content */}
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-900 mb-4">
            Oops! Access Denied
          </h1>
          <p className="text-md sm:text-lg text-gray-800 mb-6 leading-relaxed">
            Unfortunately, the content you are trying to view is currently locked due to an outstanding payment. 
            We apologize for the inconvenience.
          </p>
          <p className="text-sm sm:text-md text-gray-700 mb-6 leading-relaxed">
            It looks like the project is awaiting payment from the company. To continue using our services, please contact your project manager or the company's support team.
          </p>
          <div className="bg-purple-100 p-4 sm:p-6 rounded-lg text-left text-gray-700 mb-8">
            <p className="font-semibold mb-4">Next Steps:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reach out to your project manager to settle the payment.</li>
              <li>Contact our support team if you have any questions.</li>
              <li>We’ll unlock the content as soon as the payment is processed.</li>
            </ul>
          </div>
          <button className="bg-purple-900 text-white font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-full hover:bg-purple-800 transition duration-300 ease-in-out shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotPaidPage;
