import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser, faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../../css/Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            {/* Footer kodları */}
            <div className="hidden md:block bg-gray-800 text-white p-2 text-sm">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>bandage@destek.com</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <span>Follow us and get a chance to win 80% off</span>
                    </div>
                    <div className="flex space-x-4 items-center mr-4">
                        <span>Follow us:</span>
                        <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400 cursor-pointer" />
                        <FontAwesomeIcon icon={faYoutube} className="hover:text-gray-400 cursor-pointer" />
                        <FontAwesomeIcon icon={faFacebook} className="hover:text-gray-400 cursor-pointer" />
                        <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-400 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Header içeriği */}
            <div className="bg-white shadow-md p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Bandage</h1>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon icon={faUser} className="text-lg cursor-pointer" />
                        <FontAwesomeIcon icon={faSearch} className="text-lg cursor-pointer" />
                        <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer" />
                        <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer md:hidden" />
                    </div>
                </div>
                <nav className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 md:space-y-0 pt-4">
                    <Link to="/" className="text-base text-gray-700">Home</Link>
                    <Link to="/shop" className="text-base text-gray-700">Shop</Link>
                    <a href="#product" className="text-base text-gray-700">Product</a>
                    <a href="#pricing" className="text-base text-gray-700">Pricing</a>
                    <a href="#contact" className="text-base text-gray-700">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
