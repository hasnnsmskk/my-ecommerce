import React from 'react'
import hero1 from "../../assets/TeamPageİmg/hero1.jpg"
import hero2 from "../../assets/TeamPageİmg/hero2.jpg"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>

            {/* Hero Section */}
            <section className=" mt-0 bg-gray-50 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Innovation tailored for you</h1>
                <div className="container mx-auto px-4">
                    <nav className="text-center md:text-right mt-2 md:mt-0 md:mr-4">
                        <Link to="/" className="text-base text-black font-bold hover:underline">Home</Link> &gt; <span className="text-gray-500">Team</span>
                    </nav>
                </div>
                <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mt-8 ">
                    <img src={hero1} alt="Image1" className="w-full h-[600px] md:w-1/4 mb-4 md:mb-0" />
                    <div className="grid grid-cols-2 gap-4">
                        <img src={hero2} alt="Image2" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
                        <img src={hero2} alt="Image3" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
                        <img src={hero2} alt="Image4" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
                        <img src={hero2} alt="Image5" className="w-full h-40 md:w-80 md:h-[275px] object-cover " />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero