import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from './learning-animate.svg';

function HeroSection3() {

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
                    <div className="md:w-2/3" data-aos="fade-up">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6 mt-10">
                                Simple Solutions For Complex Sales.
                            </h1>
                            <p className="text-xl text-gray-700 mb-4">
                                Welcome To CircleSuite, Your All-ln-One Solution For Streamlining Your Business Operations. With
                                CircleSuite, You Can Empower Your Workforce, Optimize Your Processes, And Drive Growth Like Never
                                Before. Our Suite Of Powerful Tools Includes CircleHRM For Efficient Human Resource Management,
                                CirclePayroll For Hassle-Free Payroll Processing, CirclePOS For Seamless Retail Transactions, CircleCRM For
                                Effective Customer Relationship Management, And Circlelnventory For Optimized Inventory Control.
                            </p>

                        </div>

                    </div>



                    {/* Right Side */}
                    <div className="md:w-1/3 mt-8 md:mt-0" data-aos="fade-left">
                        <img
                            src={HeroImage}
                            alt="CircleLearn Image"
                            className="mx-auto md:mx-0"
                            style={{ maxWidth: '90%', height: 'auto' }} // Adjust max-width or remove it
                        />

                    </div>

                </div>

            </div>

            {/* <center>
                <hr className="w-3/4 mt-8 border-t border-[#4904891a] bg-[#49048946]" />
            </center> */}

        </div>
    )
}

export default HeroSection3


