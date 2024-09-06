import React from 'react';
import feature1 from "../../assets/HomePageİmg/feature1.jpg";
import feature2 from "../../assets/HomePageİmg/feature2.jpg";
import feature3 from "../../assets/HomePageİmg/feature3.jpg";

function FeaturedPosts() {
    return (
        <section className="py-10">
            <div className="text-center mb-8">
                <p className="text-blue-500 text-sm">Practice Advice</p>
                <h2 className="text-4xl font-bold">Featured Posts</h2>
                <p className="text-gray-500 mt-2">
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
                <div className="max-w-xs w-full md:w-1/3">
                    <div className="relative">
                        <img src={feature1} alt="Post 1" className=" w-full h-[215px] object-cover" />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">Google Trending New</p>
                        <h3 className="text-lg font-bold mt-1">Loudest à la Madison #1 (L'integral)</h3>
                        <p className="text-gray-600 mt-2">
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                            <p className="flex items-center">
                                <span className="mr-2">📅</span> 22 April 2021
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">💬</span> 10 comments
                            </p>
                        </div>
                        <p className="mt-4 text-blue-500 font-bold cursor-pointer text-center">Learn More &rarr;</p>
                    </div>
                </div>
                <div className="max-w-xs w-full md:w-1/3">
                    <div className="relative">
                        <img src={feature2} alt="Post 2" className=" w-full h-[215px] object-cover" />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">Google Trending New</p>
                        <h3 className="text-lg font-bold mt-1">Loudest à la Madison #1 (L'integral)</h3>
                        <p className="text-gray-600 mt-2">
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                            <p className="flex items-center">
                                <span className="mr-2">📅</span> 22 April 2021
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">💬</span> 10 comments
                            </p>
                        </div>
                        <p className="mt-4 text-blue-500 font-bold cursor-pointer text-center">Learn More &rarr;</p>
                    </div>
                </div>
                <div className="max-w-xs w-full md:w-1/3">
                    <div className="relative">
                        <img src={feature3} alt="Post 3" className=" w-full h-[215px] object-cover" />
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">Google Trending New</p>
                        <h3 className="text-lg font-bold mt-1">Loudest à la Madison #1 (L'integral)</h3>
                        <p className="text-gray-600 mt-2">
                            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                        </p>
                        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                            <p className="flex items-center">
                                <span className="mr-2">📅</span> 22 April 2021
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">💬</span> 10 comments
                            </p>
                        </div>
                        <p className="mt-4 text-blue-500 font-bold cursor-pointer text-center">Learn More &rarr;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedPosts;
