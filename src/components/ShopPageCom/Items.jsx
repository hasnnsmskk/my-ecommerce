import React from 'react';
import { Link } from 'react-router-dom';
import cloths from "../../assets/ShopPageİmg/cloths.jpg";

function Items() {
    return (
        <div className="relative">
            {/* Breadcrumb ve Başlık */}
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-xl font-bold text-center">Shop</h1>
                    <nav className="text-center mt-2">
                        <Link to="/" className="text-base text-black font-bold hover:underline">Home</Link> &gt; <span className="text-gray-500">Shop</span>
                    </nav>
                </div>
            </div>

            {/*Itemler */}
            <div className="block md:hidden py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/product-page-1" className="relative group">
                            <img src={cloths} alt="Cloths" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center  ">
                                <div>
                                    <h2 className="text-2xl font-bold">Cloths</h2>
                                    <p className="mt-2 text-lg">5 Items</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-page-2" className="relative group">
                            <img src={cloths} alt="Cloths" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center ">
                                <div>
                                    <h2 className="text-2xl font-bold">Cloths</h2>
                                    <p className="mt-2 text-lg">5 Items</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-page-3" className="relative group">
                            <img src={cloths} alt="Cloths" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center ">
                                <div>
                                    <h2 className="text-2xl font-bold">Cloths</h2>
                                    <p className="mt-2 text-lg">5 Items</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-page-4" className="relative group">
                            <img src={cloths} alt="Cloths" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center ">
                                <div>
                                    <h2 className="text-2xl font-bold">Cloths</h2>
                                    <p className="mt-2 text-lg">5 Items</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-page-5" className="relative group">
                            <img src={cloths} alt="Cloths" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-center ">
                                <div>
                                    <h2 className="text-2xl font-bold">Cloths</h2>
                                    <p className="mt-2 text-lg">5 Items</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="block md:hidden py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-700 ">Showing all 12 results</p>

                    {/* Views kısmı */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2 ml-28 mt-4">
                            <p className="text-gray-700 font-medium">Views:</p>
                            <button className="p-2 bg-gray-200 rounded">
                                <i className="fas fa-th"></i>
                            </button>
                            <button className="p-2 bg-gray-200 rounded">
                                <i className="fas fa-list"></i>
                            </button>
                        </div>
                    </div>

                    {/* Filter kısmı */}
                    <div className="flex items-center">
                        <div className="relative mr-2 w-full mt-3 ml-10">
                            <select className="appearance-none border border-gray-300 p-2 w-full rounded">
                                <option>Popularity</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            <span className="absolute right-2 top-2 text-gray-500">
                                <i className="fas fa-chevron-down"></i> {/* Dropdown ok iconu */}
                            </span>
                        </div>
                        <button className="bg-blue-500 text-white p-2 rounded w-52 mt-3 mr-10">
                            Filter
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Items;
