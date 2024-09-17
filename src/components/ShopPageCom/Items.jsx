import React from 'react';
import { Link } from 'react-router-dom';
import cloths from "../../assets/ShopPageİmg/cloths.jpg";

function Items() {
    return (
        <div className="relative">
            {/* Breadcrumb ve Başlık */}
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center md:justify-between">
                        {/* Sol tarafta Shop başlığı */}
                        <h1 className="text-xl font-bold text-center md:text-left md:ml-4">Shop</h1>

                        {/* Sağ tarafta Home > Shop navigasyonu */}
                        <nav className="text-center md:text-right mt-2 md:mt-0 md:mr-4">
                            <Link to="/" className="text-base text-black font-bold hover:underline">Home</Link> &gt; <span className="text-gray-500">Shop</span>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Itemler */}
            <div className="bg-gray-100 py-6">
                <div className="container mx-auto px-4">
                    {/* Mobil görünümde grid düzeni */}
                    <div className="block md:hidden">
                        <div className="grid grid-cols-1 gap-4">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <Link to={`/product/${item}`} key={item} className="relative group">
                                    <img src={cloths} alt={`Cloths ${item}`} className="w-full h-48 object-cover" />
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                                        <div>
                                            <h2 className="text-2xl font-bold">Cloths</h2>
                                            <p className="mt-2 text-lg">5 Items</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Masaüstü görünümünde yatay düzen */}
                    <div className="hidden md:grid md:grid-cols-5 md:gap-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Link to={`/product/${item}`} key={item} className="relative group">
                                <img src={cloths} alt={`Cloths ${item}`} className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                                    <div>
                                        <h2 className="text-2xl font-bold">Cloths</h2>
                                        <p className="mt-2 text-lg">5 Items</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="container mx-auto px-4">
                    {/* Mobil görünüm */}
                    <div className="block md:hidden">
                        <p className="text-center text-gray-700">Showing all 12 results</p>

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

                    {/* Masaüstü görünümünde yatay düzen */}
                    <div className="hidden md:flex md:items-center md:justify-between md:mb-3">
                        <p className="text-gray-700 md:ml-4">Showing all 12 results</p>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 md:mr-80">
                                <p className="text-gray-700 font-medium">Views:</p>
                                <button className="p-2 bg-gray-200 rounded">
                                    <i className="fas fa-th"></i>
                                </button>
                                <button className="p-2 bg-gray-200 rounded">
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>

                            <div className="relative w-full max-w-xs">
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

                            <button className="bg-blue-500 text-white p-2 rounded w-52">
                                Filter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Items;
