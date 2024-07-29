import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from './Logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'About' },
        { id: 2, text: 'Feature' },
        { id: 3, text: 'Industries' },
        { id: 4, text: 'Contact' },
        { id: 5, text: 'Sign In' },
    ];

    return (
        <div className='bg-gray-100'>
            <div className='flex justify-between items-center h-24 max-w-full px-4 text-white mx-10'>
                <h1 className='w-full text-3xl font-bold text-black whitespace-nowrap'>
                    <img src={logo} alt="Logo" className="w-30 h-20" />
                </h1>

                <ul className='hidden md:flex space-x-4'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 rounded-xl cursor-pointer duration-300 text-black whitespace-nowrap'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                <button className='hidden md:block text-white bg-[#480489] font-bold py-3 px-6 rounded-md whitespace-nowrap'>
                    Start for Free
                </button>

                <div onClick={handleNav} className='block md:hidden z-50'>
                    {nav ? <AiOutlineClose size={20} className='text-[#480489]' /> : <AiOutlineMenu size={20} className='text-[#480489]' />}
                </div>
            </div>

            {/* Modal-style dropdown */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[#00000080] transition-opacity duration-300 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-40`}
                onClick={handleNav}
            >
                <div
                    className={`fixed top-0 left-0 w-4/5 md:w-1/2 h-full bg-[#000300] transition-transform duration-300 ${nav ? 'transform translate-x-0' : 'transform translate-x-full'} z-50`}
                    onClick={(e) => e.stopPropagation()} // Prevents clicks from closing the menu
                >
                    <div className='flex justify-between items-center p-4'>
                        <h1 className='text-3xl font-bold text-white'>Circle Pos</h1>
                        <div onClick={handleNav}>
                            <AiOutlineClose size={30} className='text-white' />
                        </div>
                    </div>
                    <ul className='flex flex-col items-center mt-8'>
                        {navItems.map(item => (
                            <li
                                key={item.id}
                                className='p-4 border-b border-gray-600 text-white hover:text-black cursor-pointer w-full text-center'
                            >
                                {item.text}
                            </li>
                        ))}
                        <li className='p-4'>
                            <button className='bg-[#480489] text-white px-4 py-2 rounded-xl w-full hover:bg-[#380374]'>
                                Start for Free
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
