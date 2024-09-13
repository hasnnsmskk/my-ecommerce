import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUser, faSearch, faShoppingCart, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../../css/Header.css";
import { Link } from 'react-router-dom';

function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menünün açık olup olmadığını takip eden state

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState); // Menünün açık/kapalı durumunu değiştirir
    };

    return (
        <header>
            {/* Üst Bar (Masaüstü için görünür) */}
            <div className="hidden md:block bg-emerald-600 text-white p-2 text-sm">
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
                        <FontAwesomeIcon icon={faInstagram} className="hover-effect" />
                        <FontAwesomeIcon icon={faYoutube} className="hover-effect" />
                        <FontAwesomeIcon icon={faFacebook} className="hover-effect" />
                        <FontAwesomeIcon icon={faTwitter} className="hover-effect" />
                    </div>
                </div>
            </div>

            {/* Header içeriği */}
            <div className="bg-white shadow-md p-4 relative">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold ml-4">Bandage</h1>

                    {/* Masaüstü için navigasyon menüsü */}
                    <nav className="hidden md:flex md:space-x-4 items-center ml-28 mr-auto">
                        <Link to="/" className="text-base text-gray-700">Home</Link>
                        <Link to="/shop" className="text-base text-gray-700">Shop</Link>
                        <a href="#product" className="text-base text-gray-700">Product</a>
                        <a href="#pricing" className="text-base text-gray-700">Pricing</a>
                        <a href="#contact" className="text-base text-gray-700">Contact</a>
                    </nav>

                    {/* Sağdaki ikonlar (Sadece masaüstü için) */}
                    <div className="hidden md:flex space-x-3 items-center mr-2">
                        <FontAwesomeIcon icon={faUser} className="icon-styles" />
                        <span className="text-blue-500 text-lg cursor-pointer">Login/User</span>
                        <FontAwesomeIcon icon={faSearch} className="icon-styles" />
                        <FontAwesomeIcon icon={faShoppingCart} className="icon-styles" />
                        <FontAwesomeIcon icon={faHeart} className="icon-styles" />
                    </div>

                    {/* Mobilde görünen menü ikonu */}
                    <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer md:hidden" onClick={toggleMenu} />
                </div>

                {/* Mobil için açılır kapanır navigasyon menüsü */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center pt-4">
                        <nav className="flex flex-col items-center space-y-4">
                            <Link to="/" className="text-base text-gray-700" onClick={toggleMenu}>Home</Link>
                            <Link to="/shop" className="text-base text-gray-700" onClick={toggleMenu}>Shop</Link>
                            <a href="#product" className="text-base text-gray-700" onClick={toggleMenu}>Product</a>
                            <a href="#pricing" className="text-base text-gray-700" onClick={toggleMenu}>Pricing</a>
                            <a href="#contact" className="text-base text-gray-700" onClick={toggleMenu}>Contact</a>
                        </nav>
                        <div className="mt-8 flex flex-col items-center space-y-4">
                            <FontAwesomeIcon icon={faUser} className="icon-styles" />
                            <FontAwesomeIcon icon={faSearch} className="icon-styles" />
                            <FontAwesomeIcon icon={faShoppingCart} className="icon-styles" />
                            <FontAwesomeIcon icon={faHeart} className="icon-styles" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default TopBar;
