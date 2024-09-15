import React, { useState } from 'react';
import resim from '../../assets/HomePageİmg/ressim.jpg';
import resimm from '../../assets/HomePageİmg/kadınn.jpg';
import img from '../../assets/HomePageİmg/orti.jpg';

function Carousel1() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [resimm, resim, img];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-[700px] overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div className="w-full flex-shrink-0 relative" key={index}>
                        <img src={slide} className="w-full h-[700px] object-cover" alt={`Slide ${index + 1}`} />
                        <div className="absolute top-1/2 left-80 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
                            <h5 className="text-xs md:text-lg lg:text-xl font-semibold mb-2 md:mb-4 lg:mb-6 tracking-wider text-white">
                                Summer 2024
                            </h5>
                            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 text-white mt-2">
                                <span className="block md:inline">NEW </span>
                                <span className="block md:inline">COLLECTION</span>
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 text-white">
                                We know how large objects will act,
                                <br />
                                but things on a small scale.
                            </p>
                            <a href="#" className="bg-green-500 text-white text-xs md:text-sm lg:text-base px-3 py-2 md:px-4 md:py-2 rounded">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl focus:outline-none"
                style={{ zIndex: 10 }}
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl focus:outline-none"
                style={{ zIndex: 10 }}
            >
                &gt;
            </button>
        </div>
    );
}

export default Carousel1;

