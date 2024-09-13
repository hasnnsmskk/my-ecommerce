import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Footer() {
    return (
        <footer>
            {/* Üst kısım - beyaz arka plan */}
            <div className="bg-white py-2">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                    <h2 className="text-2xl font-bold  md:mb-0">Bandage</h2>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-blue-500 hover:text-gray-400 cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-blue-500 hover:text-gray-400 cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="text-blue-500 hover:text-gray-400 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 border-gray-600" />
            {/* Alt kısım - beyaz arka plan */}
            <div className="bg-white py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div>
                        <h3 className="font-bold mb-4">Company Info</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600">About Us</a></li>
                            <li><a href="#" className="text-gray-600">Carrier</a></li>
                            <li><a href="#" className="text-gray-600">We are hiring</a></li>
                            <li><a href="#" className="text-gray-600">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600">About Us</a></li>
                            <li><a href="#" className="text-gray-600">Carrier</a></li>
                            <li><a href="#" className="text-gray-600">We are hiring</a></li>
                            <li><a href="#" className="text-gray-600">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600">Business Marketing</a></li>
                            <li><a href="#" className="text-gray-600">User Analytic</a></li>
                            <li><a href="#" className="text-gray-600">Live Chat</a></li>
                            <li><a href="#" className="text-gray-600">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600">iOS & Android</a></li>
                            <li><a href="#" className="text-gray-600">Watch a Demo</a></li>
                            <li><a href="#" className="text-gray-600">Customers</a></li>
                            <li><a href="#" className="text-gray-600">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Get In Touch</h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-2 border border-gray-300 border-r-0 rounded-l"
                            />
                            <button className="bg-blue-500 text-white p-2 rounded-r rounded-l-none">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-gray-600 text-sm mt-4">Lorem imp sum dolor Amit.</p>
                    </div>
                </div>
            </div>

            {/* En alt kısım - gri arka plan */}
            <div className="bg-gray-200 py-4">
                <div className="max-w-6xl mx-auto px-4 flex justify-center">
                    <p className="text-gray-500">Made With Love By Finland All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
