import React from 'react';
import about from "../../assets/AboutUsPageİmg/about.jpeg";

const WorkWithUsSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-blue-600 text-white md:justify-between">
            <div className="flex flex-col ml-4 md:ml-72"> {/* Mobilde daha az margin için ml-4 eklendi */}
                <h4 className="text-xs font-bold mb-4">WORK WITH US</h4>
                <h2 className="text-2xl font-bold mb-4">Now Let’s grow Yours</h2>
                <p className="text-sm mt-2 lg:w-1/2">
                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                </p>
                <button className="mt-4 text-xs font-bold bg-blue-600 text-white py-2 px-2 rounded border border-white w-20">Button</button>
            </div>
            <div className="hidden md:block"> {/* Mobil görünümde gizle, masaüstünde göster */}
                <img src={about} alt="Description" className="w-[350px] h-auto" />
            </div>
        </div>
    );
};

export default WorkWithUsSection;
