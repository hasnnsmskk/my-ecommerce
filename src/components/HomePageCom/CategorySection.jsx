import React from 'react'
import man from "../../assets/HomePageİmg/man.jpg";
import women from "../../assets/HomePageİmg/women.jpg";
import accessories from "../../assets/HomePageİmg/accessories.jpg";
import kids from "../../assets/HomePageİmg/kids.jpg";

function CategorySection() {
    return (
        <div className="text-center my-14 md:my-28">
            <h2 className="text-2xl font-bold mb-4 md:text-3xl">EDITOR'S PICK</h2>
            <p className="text-gray-500 mb-10 text-sm md:text-base">
                Problems trying to resolve the conflict between
            </p>

            <div className="text-center ">

                <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 mt-14 mx-4 md:mx-0">
                    {/* Men and Women section */}
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <div className="relative">
                            <img src={man} alt="Men" className=" md:w-[500px] md:h-[450px] object-cover" />
                            <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-white px-4 py-2">MEN</button>
                        </div>
                        <div className="relative mt-6 md:mt-0">
                            <img src={women} alt="Women" className="md:w-[380px] md:h-[450px] object-cover" />
                            <button className="absolute bottom-4 left-20 transform -translate-x-1/2 bg-white px-4 py-2">WOMEN</button>
                        </div>
                    </div>

                    {/* Accessories and Kids section */}
                    <div className="flex flex-col md:flex-col md:space-y-6 mt-6 md:mt-0">
                        <div className="relative">
                            <img src={accessories} alt="Accessories" className=" md:w-[280px] md:h-[213px] object-cover" />
                            <button className="absolute bottom-4 left-24 transform -translate-x-1/2 bg-white px-4 py-2">ACCESSORIES</button>
                        </div>
                        <div className="relative mt-6 md:mt-0">
                            <img src={kids} alt="Kids" className=" md:w-[280px] md:h-[213px] object-cover" />
                            <button className="absolute bottom-4 left-16 transform -translate-x-1/2 bg-white px-4 py-2">KIDS</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CategorySection