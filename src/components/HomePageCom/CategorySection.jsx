import React from 'react'
import man from "../../assets/HomePageİmg/man.jpg";
import women from "../../assets/HomePageİmg/women.jpg";
import accessories from "../../assets/HomePageİmg/accessories.jpg";
import kids from "../../assets/HomePageİmg/kids.jpg";

function CategorySection() {
    return (
        <div>
            <div className="text-center my-14 md:my-28">
                <h2 className="text-2xl font-bold mb-4 md:text-3xl">EDITOR'S PICK</h2>
                <p className="text-gray-500 mb-10 text-sm md:text-base">
                    Problems trying to resolve the conflict between
                </p>

                <div className="flex flex-col md:flex-row md:justify-around text-center mt-14 md:mt-14 mx-4 md:mx-0">
                    <div className="relative">
                        <img src={man} alt="Men" className="w-full h-auto md:w-[380px] md:h-[450px] object-cover" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">MEN</button>
                    </div>
                    <div className="relative mt-6 md:mt-0">
                        <img src={women} alt="Women" className="w-full h-auto md:w-[280px] md:h-[450px] object-cover" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">WOMEN</button>
                    </div>
                    <div className="relative mt-6 md:mt-0">
                        <img src={accessories} alt="Accessories" className="w-full h-auto md:w-[280px] md:h-[215px] object-cover" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">ACCESSORIES</button>
                    </div>
                    <div className="relative mt-6 md:mt-0">
                        <img src={kids} alt="Kids" className="w-full h-auto md:w-[280px] md:h-[210px] object-cover" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2">KIDS</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CategorySection