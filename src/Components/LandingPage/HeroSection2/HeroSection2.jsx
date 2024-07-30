import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageUrl1 from './HeroImg1.svg';
import imageUrl2 from './HeroImg2.svg';
import imageUrl3 from './HeroImg3.svg';

function HeroSection2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Ensures the animation can trigger multiple times
    });
  }, []);

  const cards = [
    {
      image: imageUrl1,
      title: 'Inventory Management',
      description: 'Efficiently track and manage your inventory in real-time. From adding new products to monitoring stock levels and generating reports, our POS system streamlines inventory management.',
    },
    {
      image: imageUrl2,
      title: 'Sales & Reporting',
      description: 'Easily process transactions and generate detailed sales reports. With our POS system, you can track sales performance, analyze trends, and gain valuable insights into your business’s financial health.',
    },
    {
      image: imageUrl3,
      title: 'Flexible Payment Options',
      description: 'Accept various forms of payment seamlessly. Whether it’s cash, credit, debit cards, mobile wallets, or contactless payments, our POS system supports a wide range of payment methods.',
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center py-8">
      <div className="flex flex-col md:flex-row gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={index * 200} // Delay each card's animation slightly
          >
            <img className="w-10 h-10 object-cover mb-5" src={card.image} alt={card.title} />
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <hr className="w-3/4 mt-8 border-t border-[#4904891a] bg-[#49048946]" data-aos="fade-up" data-aos-duration="1000" />
    </div>
  );
}

export default HeroSection2;
