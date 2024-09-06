import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSearch, faShoppingCart, faHeart, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import "../../css/Header.css";

function TopBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="relative">
                {/* Başlık ve Menü Toggle İkonu */}
                <div className="p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-center flex-grow">Bandage</h1>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-lg cursor-pointer md:hidden"
                        onClick={() => setMenuOpen(!isMenuOpen)}
                    />
                </div>

                {/* Mobil Menü - Açılır Menü */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center pt-4">
                        <nav className="flex flex-col items-center space-y-4">
                            <Link to="/" className="text-base text-gray-700" onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link to="/shop" className="text-base text-gray-700" onClick={() => setMenuOpen(false)}>Shop</Link>
                            <a href="#about" className="text-base text-gray-700" onClick={() => setMenuOpen(false)}>About</a>
                            <a href="#blog" className="text-base text-gray-700" onClick={() => setMenuOpen(false)}>Blog</a>
                            <a href="#contact" className="text-base text-gray-700" onClick={() => setMenuOpen(false)}>Contact</a>
                        </nav>
                        <div className="mt-8 flex flex-col items-center space-y-4">
                            <FontAwesomeIcon icon={faUser} className="text-blue-500 text-lg cursor-pointer" />
                            <FontAwesomeIcon icon={faSearch} className="text-blue-500 text-lg cursor-pointer" />
                            <FontAwesomeIcon icon={faShoppingCart} className="text-blue-500 text-lg cursor-pointer" />
                            <FontAwesomeIcon icon={faHeart} className="text-blue-500 text-lg cursor-pointer" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default TopBar;
