import React from 'react';
import horizontal from "../../assets/HomePageİmg/horizontal.jpg";

function HorizontalCard() {
    return (
        <div className="w-full">
            <div className="card mb-3 w-full h-auto flex flex-col md:flex-row-reverse">
                {/* Yazı Kısmı */}
                <div className="flex-1 p-4 flex flex-col justify-between items-center text-center md:items-start md:text-left md:ml-80">
                    <div>
                        <h5 className="text-base md:text-lg mb-2">Summer 2024</h5>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Part of the Neural <br /> Universe</h2>
                        <p className="text-base md:text-lg mb-4">
                            We know how large objects will act,<br />
                            but things on a small scale.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                        <a href="#" className="bg-green-500 text-white text-sm md:text-base px-4 py-2 rounded mb-2 md:mb-0">
                            BUY NOW
                        </a>
                        <a href="#" className="bg-white text-green-500 border border-green-500 text-sm md:text-base px-4 py-2 rounded">
                            READ MORE
                        </a>
                    </div>
                </div>

                {/* Resim Kısmı */}
                <div className="flex-shrink-0 w-full md:w-1/3 mt-4 md:mt-0">
                    <img src={horizontal} className="w-full h-full object-cover" alt="Horizontal" />
                </div>
            </div>
        </div>
    );
}

export default HorizontalCard;
