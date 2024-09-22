import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faShoppingCart, faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import "../../css/Header.css";
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative z-20">
            {/* Header içeriği */}
            <div className="bg-white shadow-md p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold ml-4">Bandage</h1>

                    {/* Masaüstü için navigasyon menüsü */}
                    <nav className="hidden md:flex md:space-x-4 items-center ml-28 mr-auto">
                        <Link to="/" className="text-base text-gray-700">Home</Link>
                        <Link to="/shop" className="text-base text-gray-700">Shop</Link>
                        <Link to="/product" className="text-base text-gray-700">Product</Link>
                        <a href="#pricing" className="text-base text-gray-700">Pricing</a>
                        <Link to="contact" className="text-base text-gray-700">Contact</Link>
                    </nav>

                    {/* Sağdaki ikonlar */}
                    <div className="flex space-x-3 items-center mr-2">
                        {/* Kullanıcı ikonu kaldırıldı */}
                        <FontAwesomeIcon icon={faSearch} className="text-lg cursor-pointer md:hidden" />
                        <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer md:hidden" />

                        <Link to="/signup" className="hidden md:flex items-center text-blue-500 text-lg cursor-pointer">
                            <FontAwesomeIcon icon={faUser} />
                            <span className="ml-1">Login/Register</span>
                        </Link>

                        <FontAwesomeIcon icon={faSearch} className="hidden md:block text-blue-500 text-lg cursor-pointer" />
                        <FontAwesomeIcon icon={faShoppingCart} className="hidden md:block text-blue-500 text-lg cursor-pointer" />
                        <FontAwesomeIcon icon={faHeart} className="hidden md:block text-blue-500 text-lg cursor-pointer" />

                        <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer md:hidden" onClick={toggleMenu} />
                    </div>
                </div>

                {/* Mobil için açılır kapanır navigasyon menüsü */}
                {isMenuOpen && (
                    <nav className="flex flex-col justify-center items-center space-y-4 pt-4 md:hidden">
                        <Link to="/" className="text-base text-gray-700">Home</Link>
                        <Link to="/shop" className="text-base text-gray-700">Shop</Link>
                        <Link to="/product" className="text-base text-gray-700">Product</Link>
                        <a href="#pricing" className="text-base text-gray-700">Pricing</a>
                        <Link to="contact" className="text-base text-gray-700">Contact</Link>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;
