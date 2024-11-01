import React from 'react';
import women from "../../assets/AboutUsPageİmg/women.png"
const StatsSection = () => {
    return (
        <div className="text-center py-8 flex flex-col items-center ">
            <section className="flex flex-col lg:flex-row w-full max-w-screen-lg ">
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-16">
                    <p className='font-bold text-xs mb-4'>ABOUT COMPANY</p>
                    <h1 className="text-6xl font-bold">ABOUT US</h1>

                    <p className="mt-4 text-gray-500 text-left lg:text-left">
                        <span className="block sm:inline">We know how large objects will act, </span> <br />
                        <span className="block sm:inline"> but things on a small scale  </span>
                    </p>

                    <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Get Quote Now</button>

                </div>

                <section className="relative flex justify-center items-center mt-24 md:mt-4">
                    <div className="absolute md:mb-20 w-80 h-80 bg-pink-100 rounded-full md:w-80 md:h-80 sm:w-64 sm:h-64"></div>
                    <div className="absolute mt-20 md:mt-46 ml-80 w-5 h-5 bg-pink-100 rounded-full md:w-5 md:h-5 sm:w-4 sm:h-4"></div>
                    <div className="absolute ml-96 md:mb-52 w-5 h-5 bg-purple-600 rounded-full md:w-5 md:h-5 sm:w-4 sm:h-4"></div>
                    <div className="absolute mb-52 md:mb-72 mr-80 w-16 h-16 bg-pink-100 rounded-full md:w-16 md:h-16 sm:w-12 sm:h-12"></div>

                    <div className="w-full flex justify-center relative z-10">
                        <img src={women} alt="Shopping" className="w-[500px] h-auto md:h-auto sm:h-[300px] object-cover" />
                    </div>
                </section>
            </section>

            <div className='flex flex-col lg:flex-row md:ml-72 mt-16 '> {/* Mobilde alt alta, masaüstünde yan yana */}
                <div className='w-full lg:w-1/3 flex flex-col items-center lg:text-left mb-4 lg:mb-0'> {/* Alt alta görünüm için mb-4 ekledik */}
                    <p className='text-red-500'>Problems trying</p>
                    <p className='text-2xl font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                </div>

                <div className='w-full lg:w-1/3 flex flex-col lg:text-left md:mt-8 md:ml-20'>
                    <p className='text-gray-500'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-20 mt-12 md:grid-cols-4 ">
                <div>
                    <p className="text-5xl font-bold">15K</p>
                    <p className="text-gray-500 font-bold">Happy Customers</p>
                </div>
                <div>
                    <p className="text-5xl font-bold">150K</p>
                    <p className="text-gray-500 font-bold">Monthly Visitors</p>
                </div>
                <div>
                    <p className="text-5xl font-bold">15</p>
                    <p className="text-gray-500 font-bold">Countries Worldwide</p>
                </div>
                <div>
                    <p className="text-5xl font-bold">100+</p>
                    <p className="text-gray-500 font-bold">Top Partners</p>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
